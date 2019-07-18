/**
 * The golden ratio as approximated by: https://en.wikipedia.org/wiki/Golden_ratio
 * @type {Number}
 */
Number.GOLDENRATIO = (1 + Math.sqrt(5)) / 2;

/**
 * Round a number to it's nearest whole number
 * @function
 * @returns {Number} the closest whole number to the original number
 */
Number.prototype.round = function round() {
  return Math.round(this);
};

/**
 * Round a number down to it's nearest whole number
 * @function
 * @returns {Number} the closest whole number to the rounded down original number
 */
Number.prototype.floor = function floor() {
  return Math.floor(this);
};

/**
 * Round a number to the highest
 * @function
 * @returns {Number} the closest whole number to the rounded up original number
 * @examples
 *  Number(5.32).ceil() -> 6
 */
Number.prototype.ceil = function ceil() {
  return Math.ceil(this);
};

/**
 * Pad a number with a certain amount of zeros
 * @function
 * @returns {String} A padded string that indicates
 */
Number.prototype.pad = function pad(leftPadding, rightPadding) {
  const numAsArray = String(this).split(".");
  // If the number has a decimal place...

  if (numAsArray.length > 1) {
    const leftSide = numAsArray[0];
    const rightSide = numAsArray[1];
    console.log(leftSide, rightSide);
  } else {
    const num = numAsArray[0];
    console.log(num);
  }
};

console.log(Number(34.43).pad(0, 0));
console.log(Number("3453").pad(0, 0));
