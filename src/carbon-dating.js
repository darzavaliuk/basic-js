const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(testActivity) {
    if (typeof testActivity != "string") return false;
    try {
        testActivity = parseFloat(testActivity);
    } catch (e) {
        return false;
    }

    if (isNaN(testActivity)) {
        return false;
    }

    if (testActivity <= 0 || testActivity > 15) return false;

    let k = Math.LN2 / HALF_LIFE_PERIOD;

    return Math.ceil(Math.log(MODERN_ACTIVITY / testActivity) / k);
}

module.exports = {
    dateSample,
};
