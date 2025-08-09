/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function sorting(arr) {
    let sorted = [...arr];
    let i = 0;

    while (i < sorted.length) {
        if (sorted[i] > sorted[i + 1]) {
            let save = sorted[i];
            sorted[i] = sorted[i + 1];
            sorted[i + 1] = save;

            i = 0;
        } else {
            i++;
        }
    }
    
    return sorted;
}

var containsDuplicate = function(nums) {
    // let sorted = sorting(nums);
    // I made the function above to manually sort but leetcode didnt approve since its too slow LMAO

    let sorted = nums.sort((a,b) => a - b)

    for (let p = 0; p < sorted.length - 1;) {
        if (sorted[p] === sorted[p + 1]) {
            return true
        } else {
            p++
        }
    }

    return false
};

console.log(containsDuplicate([1,2,2,2,2,2,2,3,3,4]))