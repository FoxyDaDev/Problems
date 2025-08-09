/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


function isDuplicate(a, b) {
    return a === b;
}

var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length;
    let i = 0;
    let j = i + 1;

    while (i < len) {
        while (j < len && j <= i + k) {
            if (isDuplicate(nums[i], nums[j])) {
                return true;
            }
            j++;
        }
        i++;
        j = i + 1;
    }

    return false;
};

console.log(containsNearbyDuplicate([1,2,4,1], 3))
