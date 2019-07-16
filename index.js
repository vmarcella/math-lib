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
 */
Number.prototype.ceil = function ceil() {
  return Math.ceil(this);
};
