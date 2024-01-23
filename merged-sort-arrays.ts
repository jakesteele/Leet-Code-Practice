/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let pointer1 = m - 1; // Pointer position for nums1.
    let pointer2 = n - 1; // Pointer position for nums2.
    for (var i = (m + n) - 1; i >= 0; i--) { // Check through array items.
        if (pointer1 < 0) {  // If the first array is out of items.
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
        else if (pointer2 < 0) { // If the second array is out of items.
            nums1[i] = nums1[pointer1];
            pointer1--;
        }
         // compare the next two items in both arrays.
        else if (nums1[pointer1] >= nums2[pointer2]) {
            nums1[i] = nums1[pointer1];
            pointer1--;
        } else if (nums2[pointer2] > nums1[pointer1]) {
            nums1[i] = nums2[pointer2];
            pointer2--;
        }
    }
};
// runtime 45ms. 