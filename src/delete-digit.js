const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
    let res = 0,
        digits = [];

    while (num) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    for (let index = 0; index < digits.length; index++) {
        let n = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (i != index) {
                n = n * 10 + digits[i];
            }
        }
        res = Math.max(n, res);
    }

    console.log(digits);
    return res;
}

// console.log(deleteDigit(861719))

module.exports = {
    deleteDigit,
};
