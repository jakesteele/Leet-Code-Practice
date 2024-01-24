/*
* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
* First of two submissions to this problem. 
*/
/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    const lastBuffer : number[] = [];
    const firstBuffer : number[] = [];
    const l = nums.length;
    if (l === 1) { return; }
    while (k > l) { 
        k -= l;
    }
    const lk : number = (l - k);
    // Loop through and store the last numbers. -- Not ideal will optimize. 
    for (var fl : number = lk; fl < l; fl++) {
        lastBuffer.push(nums[fl]);
    }
    // Loop through array once and replace everything. 
    for (var i : number = 0; i < l; i++) {
        if (i < lk) {
            firstBuffer.push(nums[i]);
        }
        if (i < k) {
            nums[i] = lastBuffer.shift() ?? 0;
        } else {
            nums[i] = firstBuffer.shift() ?? 0;
        }
    }
};

// Better solution:
function rotate(nums: number[], k: number): void {
    const endValues =  nums.splice(0, nums.length - k % nums.length)
    nums.push(...endValues)
}