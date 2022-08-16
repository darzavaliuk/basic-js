const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) return "Unable to determine the time of year!";
    let dat;
    if (String(date) == new Date() || Object.prototype.toString.call(date) !== "[object Date]" || !(date instanceof Date)) {
      throw new Error('Invalid date!');
    }
    // console.log(dat.getMonth());
    switch (date.getMonth()) {
        case 0:
        case 1:
        case 11:
            return "winter";

        case 2:
        case 3:
        case 4:
            return "spring";

        case 5:
        case 6:
        case 7:
            return "summer";

        case 8:
        case 9:
        case 10:
            return "autumn";
    }
}

// const [winter, spring, summer, autumn] = [
//     new Date(2019, 11, 22, 23, 45, 11, 500),
//     new Date(2018, 4, 17, 11, 27, 4, 321),
//     new Date(2017, 6, 11, 23, 45, 11, 500),
//     new Date(1994, 8, 26, 3, 0, 11, 500),
// ];

// console.log(getSeason(winter));

module.exports = {
    getSeason,
};
