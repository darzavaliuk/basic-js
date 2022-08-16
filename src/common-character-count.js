const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

MAX_CHAR = 26;

function getCommonCharacterCount(str1, str2) {
    str1.toLowerCase();
    str2.toLowerCase();
    let count = 0;
    const obj = str2.split("");
    for (const str of str1) {
        let letter = obj.findIndex((s) => s === str);
        if (letter >= 0) {
            count++;
            obj.splice(letter, 1);
        }
    }
    return count;
}

console.log(getCommonCharacterCount("aabcc", "adcaa"));

module.exports = {
    getCommonCharacterCount,
};
