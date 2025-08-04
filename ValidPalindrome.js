/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

// Mostly used regex for this

var isPalindrome = function(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, '');
    let noSpace = cleaned.replace(/\s/g, '');
    let down = noSpace.toLowerCase()

    let reverse = []

    for (let i = down.length; i >= 0; i--) {
        let char = down.charAt(i)
        reverse.push(char)
    }

    let final = reverse.join('')

    if (final === down) {
        return true;
    } else {
        return false
    }
};

console.log(isPalindrome("A man a plan a canal: panama"))