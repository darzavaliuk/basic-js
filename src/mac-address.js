const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    if (n.length != 17) return false;

    n = n + "-";

    const mySet1 = new Set("1234567890ABCDEF");

    for (let i = 0; i < 6; i++) {
        if (
            !(
                n[3 * i + 2] == "-" &&
                mySet1.has(n[3 * i + 0]) &&
                mySet1.has(n[3 * i + 1])
            )
        )
            return false;
    }
    return true;
}

// console.log(isMAC48Address("00-1B-63-84-45-E6"));

module.exports = {
    isMAC48Address,
};
