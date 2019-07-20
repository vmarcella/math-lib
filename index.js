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
 * Round a number down to it's nearest whole number.
 * @function
 * @returns {Number} the closest whole number to the rounded down original number.
 */
Number.prototype.floor = function floor() {
  return Math.floor(this);
};

/**
 * Round a number up to it's closest whole number
 * @function
 * @returns {Number} the closest whole number to the rounded up original number.
 * @examples
 *  Number(5.32).ceil() -> 6
 */
Number.prototype.ceil = function ceil() {
  return Math.ceil(this);
};

/**
 * Pad a number with a specified amount of zeros (On either the left or right side)
 * @function
 * @returns {String} A padded string that indicates.
 * @examples
 *  Number(5.3234).pad(4,5) -> 0004.32340
 *  Number(4.34).pad(2,0) -> 04.34
 *  Number(23.32).pad(10,10) -> 0000000023.3200000000
 *
 */
Number.prototype.pad = function pad(leftPadding, rightPadding) {
  const numAsArray = String(this).split(".");

  // If the number has a decimal place...
  if (numAsArray.length > 1) {
    // Get the left side of the number
    let leftSide = numAsArray[0];
    const leftLength = leftSide.length;

    // Get the right side of the number
    let rightSide = numAsArray[1];
    const rightLength = rightSide.length;

    // If the left side has room for padding.
    if (leftLength < leftPadding) {
      const paddingNeeded = leftPadding - leftLength;
      leftSide = "0".repeat(paddingNeeded) + leftSide;
    }

    // If the right side of has room for padding.
    if (rightLength < rightPadding) {
      const paddingNeeded = rightPadding - rightLength;
      rightSide += "0".repeat(paddingNeeded);
    }

    // Return the padded number
    return `${leftSide}.${rightSide}`;
  }

  // There isn't a decimal place within the number,
  // no need to add right padding.
  const num = numAsArray[0];
  const paddingNeeded = leftPadding - num.length;
  return "0".repeat(paddingNeeded) + num;
};

/**
 * Convert a number from degrees to radians
 * @function
 * @returns {Number} The converted number in radians
 * @examples
 *  Number(20).degToRad() -> 0.349066
 */
Number.prototype.degToRad = function degToRad() {
  return this * (Math.PI / 180);
};

/**
 * Convert a number from radians to degrees
 * @function
 * @returns {Number} the converted number in degrees.
 * @examples
 *  Number(1).radToDeg() -> 57.2958
 */
Number.prototype.radToDegree = function radToDeg() {
  return this / (Math.PI / 180);
};
