/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let char = nums[i]
        if (char === target) {
            return i
        }
    }

    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        let char = sorted[i]
        if (char > target) {
            return i
        }
    }
    return sorted.length
};

console.log(searchInsert([1,3,5,6], 2))

// THIS IS SO FUCKED UP BUT YEEHAW