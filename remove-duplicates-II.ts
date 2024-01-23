/*
* Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
* Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
* Return k after placing the final result in the first k slots of nums.
* Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/
function removeDuplicates(nums: number[]): number {
    let lastPointer = nums.length - 1;
    const shiftMinus = (nums, pos, needle, lastPointer) => 
    {
        let numToRemove = 0;
        let hasFoundSame = false;
        let curPos = pos;
        for (; pos <= lastPointer; pos++) {
            if (nums[pos] === needle && hasFoundSame) {
                numToRemove++;        
                continue;
            } else {
                if (nums[pos] === needle) hasFoundSame = true;
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
//67ms