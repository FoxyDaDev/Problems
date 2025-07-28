/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Im going with two pointers

var removeDuplicates = function(nums) {
    for (let p = 0; p < nums.length - 1;) {
        if (nums[p] === nums[p + 1]) {
            nums.splice(p + 1, 1)
        } else {
            p++
        }
    }

    return nums.length
};

console.log(removeDuplicates([1,2,2,2,2,2,2,3,3,4]))