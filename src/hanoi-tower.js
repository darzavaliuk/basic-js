const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, stepsPerHour) {
  const stepsPerSecond = stepsPerHour / 3600;
  const stepsToSolve = 2 ** disks - 1;
  const secondsToSolve = stepsToSolve / stepsPerSecond;

  return {
    turns: stepsToSolve,
    seconds: Math.floor(secondsToSolve),
  };
}

// console.log(calculateHanoi(15, 4522))

module.exports = {
  calculateHanoi
};
