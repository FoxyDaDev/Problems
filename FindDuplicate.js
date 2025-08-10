/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    let len = nums.length;
    let duplicate = nums[0];
    let i = 1;
    let j = 1;

    while (i < len) {
        if (nums[i] === duplicate) {
            return duplicate
        } else {
            i++
            if (i === len) {
                duplicate = nums[j]
                i = j + 1
                j++
            }
        }
    }

    return -1
};

/*
The algorithm above is slow for leetcodes time limit, I found out that you can use something called a "Set" to solve this much faster.
*/

console.log(findDuplicate([2,1,2]))