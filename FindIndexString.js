// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Im going with two pointer

var strStr = function(haystack, needle) {
    let p = 0;
    let startingIndex = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[p]) {
            if (p === 0) {
                startingIndex = i;
            }
            p++;
            if (p === needle.length) {
                return startingIndex;
            }
        } else {
            if (p > 0) {
                i = startingIndex;
            }
            p = 0;
            startingIndex = -1;
        }
    }
    return -1;
};

console.log(strStr("leetcode", "code"))

// Couldve used the javascript built in method .substring but i decided to do it manually lol