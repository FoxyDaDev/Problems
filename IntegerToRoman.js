/**
 * @param {number} num
 * @return {string}
 */

const romanToValue = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

var intToRoman = function(num) {
    const romanValue = []
    for (const [roman, value] of Object.entries(romanToValue)) {
        while (num >= value) {
            romanValue.push(roman)
            num = num - value
            console.log(num)
        }
    }

    return romanValue.join('');
};

console.log(intToRoman(3749))