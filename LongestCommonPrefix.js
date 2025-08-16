/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let arr = []

    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return arr.join('')
            }
        }

        arr.push(char)
    }

    return strs[0]
};

console.log(longestCommonPrefix([""]))

// this problem was definitely not "easy"