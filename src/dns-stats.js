const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The res should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let res = {};

    domains = domains.map((e) => e.split(".").reverse());

    console.log(domains);

    domains.forEach((str) => {
        let index = "";
        for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
            index += "." + str[i];
            if (res[index] === undefined) res[index] = 1;
            else res[index]++;
        }
    });

    return res;
}

// console.log(getDNSStats(["epam.com", "info.epam.com"]));

module.exports = {
    getDNSStats,
};
