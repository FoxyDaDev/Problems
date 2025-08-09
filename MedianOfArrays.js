/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function mergeAndSort(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}


var findMedianSortedArrays = function(nums1, nums2) {
    const merged = mergeAndSort(nums1,nums2)

    let median = 0
    let medianEven = 0

    if (merged.length % 2 !== 0) {
        median = Math.ceil(merged.length / 2) - 1
    } else {
        median = merged.length / 2 - 1
        medianEven = median + 1
    }

    let i1 = merged[median]
    let i2 = merged[medianEven]

    let sum = 0

    if (merged.length % 2 !== 0) {
        sum = i1
    } else {
        sum = (i1 + i2) / 2
    }
    
    return sum
};

console.log(findMedianSortedArrays([1,2],[3,4]))
