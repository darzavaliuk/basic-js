const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {

        if (!Array.isArray(arr)) {
            return 0;
        }

        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res = Math.max(res, this.calculateDepth(arr[i]));
        }
        return ++res;
    }
}

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]))

module.exports = {
    DepthCalculator,
};
