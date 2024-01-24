/*
* Given an array nums of size n, return the majority element.
* The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
function majorityElement(nums: number[]): number {
    const l : number = nums.length;
    if (l === 1) { return nums[0]; }
    const hashMap : Map<number, number> = new Map<number, number>();
    const majority = l / 2;
    for (var i = 0; i < l; i++)
    {
        const key : number = nums[i];
        const e : number | undefined = hashMap.get(key);
        if (e) {
            const val : number = (e + 1);
            if (val >= majority) {
                return nums[i];
            }
            hashMap.set(key, val);
        } else {
            hashMap.set(key, 1);
        }
    }
    return 0;
};