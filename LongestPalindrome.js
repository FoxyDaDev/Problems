/*
Given a string s, return the longest palindrome substring in s.
*/

/*
What needs to be done:
    first start with the longest number. (say n is 10 words long, so we guess the longest palindrome is from 0 to 10 (the whole thing))
    if it isnt a palindrome, we check from 0 to 9 and 1 to 10. (2n)
    if it isnt a palindrome we check from 0 to 8, 1 to 9, 2 to 10 (3n)
    if it isnt a palindrome we check from 0 to 7, 1 to 8, 2 to 9 , 3 to 10 (4n) 
    0 to 6 (5n)
    0 to 5 (4n)
    0 to 4 (3n)
    0 to 3 (2n)
    0 to 2 (1n)
    
    and so on.
    the first palindrome we hit is the longest palindrome since we started from the longest substring.
*/

/*
    Now, how the fuck can we check if it is a palindrome?
    we use stack of course bitch
    if its even then shit is easy. we just put the first half and pop the second half and if the stack is empty at the end then bang we have a palindrome
    but if its odd, we pop the middle word.
*/

/**
 * @param {string} s
 * @return {string}
 */

function isPalindrome(str) {
    let stack = [];
    let len = str.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        stack.push(str[i]);
    }

    if (len % 2 !== 0) {
        mid++;
    }

    for (let i = mid; i < len; i++) {
        if (str[i] !== stack.pop()) {
            return false;
        }
    }

    return true;
}


var longestPalindrome = function(s) {
    let len = s.length;
    let right = len

    for (let a = 0; a < len; a++) {
        for (let left = 0; left <= len - right; left++) {
            let str = s.slice(left, left + right);
            
            if (isPalindrome(str)) {
                return str
            }
        }

        right--
    }

    return "";
}

console.log(longestPalindrome("aloooooooolb"))