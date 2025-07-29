/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
consisting of non-space characters only.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let sentences = s.split(' ').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

    const lastItem = sentences[sentences.length - 1];
    
    return lastItem.length;
}

console.log(lengthOfLastWord("Hello world"));
