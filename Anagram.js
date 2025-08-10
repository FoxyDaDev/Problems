/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

/*
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr = [...s]

    for (let i = 0; i < t.length; i++) {
        let char = t[i]
        let index = arr.indexOf(char);
        
        if (index !== -1) {  
            arr.splice(index, 1);
        } else {
            return false;
        }
    }

    return arr.length === 0;
};