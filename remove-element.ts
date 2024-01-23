/*
* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
*
* Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
*
* Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
* Return k.
*/
function removeElement(nums: number[], val: number): number {
    let pointerEnd : number = (nums.length - 1);
    let pointerStart : number = 0;
    for (;pointerStart <= pointerEnd; pointerStart++) {
        // Find the first value we can swap.
        while (nums[pointerEnd] === val && pointerStart < pointerEnd) {
            nums[pointerEnd] = (val - 1);
            pointerEnd--;
        }
        if (pointerStart == pointerEnd) { // If they are on the same number, no need to continue. 
            if (nums[pointerStart] === val) {  // Swap the value if its the one we don't want.
                nums[pointerStart] = (val - 1);
                 return (pointerStart); // Return the index (count vs index)
            }
            return (pointerStart + 1); // otherwise include this value. 
        } else if (nums[pointerStart] === val) { // swap the value if we need to.
            nums[pointerStart] = nums[pointerEnd];
            nums[pointerEnd] = (val - 1);
            pointerEnd--;
        }
    }
    return pointerStart; // In some cases the pointer can end up below pointerStart, in that case just return the current start point.
};
//58ms