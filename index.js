/**
 * @param {string} word
 * @return {boolean}
 */
const vowels = ['a', 'e', 'i', 'o', 'u'];
const numbers = ['1','2','3','4','5','6','7','8','9'];


var isValid = function(word) {
    if (word.length < 4 || word.length > 19) {
    return "length checking failed";
  }

  let hasNumber = false;
  let hasVowel = false;
  let hasConsonant = false;
  let hasUppercase = false;

  for (let char of word) {
    if (!/[a-zA-Z1-9]/.test(char)) {
      return false;
    };
    if (numbers.includes(char)) {
      hasNumber = true;
    };
    if (vowels.includes(char.toLowerCase())) {
      hasVowel = true;
    };
    if (/[a-z]/i.test(char) && !vowels.includes(char.toLowerCase())) {
      hasConsonant = true;
    };
    if (/[A-Z]/.test(char)) {
      hasUppercase = true;
    };
  }

  if (!hasNumber) return false;
  if (!hasVowel) return false;
  if (!hasConsonant) return false;
  if (!hasUppercase) return false;

  return true
};

console.log(isValid("aDas123"))