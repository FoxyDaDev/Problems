/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/

/*
For more information: https://leetcode.com/problems/missing-number/description/
*/

/**
* @param {number[]} nums
* @return {number}
*/

var missingNumber = function(nums) {
    let len = nums.length;

    for (let i = len; i >= 0; i--) {
        let index = nums.indexOf(i);

        if (index !== -1) {
            nums.splice(index, 1)
        } else {
            return i
        }
    }

    return nums.length === 0
};

console.log(missingNumber([3,0,1]))