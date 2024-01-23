/* 
* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
* Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
* Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
* Return k.
*/
function removeDuplicates(nums: number[]): number {
    let lastPointer = nums.length - 1;
    const shiftMinus = (nums, pos, needle, lastPointer) => 
    {
        let numToRemove = 0;
        let curPos = pos;
        for (; pos <= lastPointer; pos++) {
            if (nums[pos] === needle) {
                numToRemove++;
                continue;
            } else {
                nums[curPos] = nums[pos];
                curPos++;
            }
        }
        while (numToRemove > 0) {
            nums[lastPointer] = null;
            lastPointer--;
            numToRemove--;
        }
        return lastPointer;
    }
    for (var i = 0; i <= lastPointer; i++) {
        lastPointer = shiftMinus(nums, (i + 1), nums[i], lastPointer);
    }
    return lastPointer + 1;
 };
 //80ms