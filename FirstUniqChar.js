/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let arr = [...s];
    let uniqueIndex = 0;
    let i = uniqueIndex + 1;
    let j = 1;
    
    while (uniqueIndex < arr.length) {
        let char = arr[i];
        
        if (arr[uniqueIndex] !== char) {
            i++;
            if (i >= arr.length) {
                return uniqueIndex;
            }
        } else {
            uniqueIndex = j
            i = uniqueIndex + 1
            j++            
        }
    }

    return -1;
};

console.log(firstUniqChar("aabb"))

// leetcode