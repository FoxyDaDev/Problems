// /*
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
// */

// Sequential:

// /**
//  * @param {number} x
//  * @return {number}
//  */

// var mySqrt = function(x) {
//     let d = Math.floor(x / 2)
//     for (let i = d; i > 0; i--) {
//         let sum = i * i
//         if (sum <= x) {
//             return i
//         }
//     }
//     if (x === 1) return 1
//     return 0
// };

// console.log(mySqrt(2147483647))

// Binary:

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1;
    let right = x;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let squared = mid * mid;

        if (squared === x) {
            return mid;
        } else if (squared < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};

console.log(mySqrt(2147483647));