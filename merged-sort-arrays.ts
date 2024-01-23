/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let pointer1 : number = m - 1; // Pointer position for nums1.
    let pointer2 : number = n - 1; // Pointer position for nums2.
    let pointer : number = (m + n) - 1; // Position of input back into nums1.
    for (;pointer >= 0; pointer--) { // check for each array position in nums1
        if (pointer1 < 0) { 
            nums1[pointer] = nums2[pointer2];
            pointer2--;
        }
        else if (pointer2 < 0) {
            nums1[pointer] = nums1[pointer1];
            pointer1--;
        }
        else if (nums1[pointer1] >= nums2[pointer2]) {
            nums1[pointer] = nums1[pointer1];
            pointer1--;
        } else if (nums2[pointer2] > nums1[pointer1]) {
            nums1[pointer] = nums2[pointer2];
            pointer2--;
        }
    }
};
//65ms