const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let num = 1;
    let res = [];
    let obj = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] != obj) {
            if (num != 1) res.push(num, obj);
            else res.push(obj);
            obj = str[i];
            num = 1;
        } else {
            num += 1;
        }
    }
    if (num != 1) res.push(num, obj);
    else res.push(obj);
    return res.join("");
}

// console.log(encodeLine("abbcca"));

module.exports = {
    encodeLine,
};
