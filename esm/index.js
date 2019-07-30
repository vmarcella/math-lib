/**
 * @desc The golden ratio as approximated by: https://en.wikipedia.org/wiki/Golden_ratio
 * @type {Number}
 */
Number.GOLDENRATIO = (1 + Math.sqrt(5)) / 2;

/**
 * @desc Round a number to it's nearest whole number
 * @function
 * @return {Number} the closest whole number to the original number
 */
Number.prototype.round = function round() {
  return Math.round(this);
};

/**
 * @desc Round a number down to it's nearest whole number.
 * @function
 * @return {Number} the closest whole number to the rounded down original number.
 */
Number.prototype.floor = function floor() {
  return Math.floor(this);
};

/**
 * @desc Round a number up to it's closest whole number
 * @function
 * @return {Number} the closest whole number to the rounded up original number.
 * @examples
 *  Number(5.32).ceil() -> 6
 */
Number.prototype.ceil = function ceil() {
  return Math.ceil(this);
};

/**
 * @desc Pad a number with a specified amount of zeros (On either the left or right side)
 * @function
 * @return {String} A padded string that indicates.
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
 * @desc Convert a number from degrees to radians
 * @function
 * @return {Number} The converted number in radians
 * @examples
 *  Number(20).degToRad() -> 0.349066
 */
Number.prototype.degToRad = function degToRad() {
  return this * (Math.PI / 180);
};

/**
 * @desc Convert a number from radians to degrees
 * @function
 * @return {Number} the converted number in degrees.
 * @examples
 *  Number(1).radToDeg() -> 57.2958
 */
Number.prototype.radToDeg = function radToDeg() {
  return this / (Math.PI / 180);
};

/**
 * @desc Convert a number to USD.
 * @function
 * @return {String} The dollar representation of the number
 * @examples
 *  Number(1).toDollars() -> $1.00
 *  Number(1.05).toDollars() -> $1.05
 *  Number(0.5).toDollars() -> ¢0.5
 */
Number.prototype.toDollars = function toDollars() {
  const numArr = String(this).split(".");

  // Number is a whole number
  if (numArr.length === 1) {
    return `$${numArr[0]}.00`;
  }

  // Number is fractional but less than 0
  if (numArr[0] === "0") {
    return `¢0.${numArr[1]}`;
  }

  // Number is fractional and greater than 0
  return `$${numArr[0]}.${numArr[1]}`;
};

/**
 * @desc Return the tax amount from the number that would be applied given the rate
 * @function
 * @param {Number} rate - The tax rate to be applied where the rate is 0 <= rate <= 100
 * or the rate is 0 <= 100
 * @return {Number} the total tax amount of the current number multiplied by the rate
 * @examples
 *  Number(10).tax(10) -> 1.00
 *  Number(60).tax(25) -> 15.00
 */
Number.prototype.tax = function tax(rate) {
  // Anything times zero is zero
  if (rate === 0) {
    return 0;
  }

  // Bound checking for the rate
  if (rate >= 0 && rate <= 100) {
    return this * (rate / 100);
  }

  throw new Error("The tax rate needs to be within 0 and 1! or 0 and 100!");
};

/**
 * @desc Return this number with a specified tax rate applied to it.
 * @function
 * @param {Number} rate - The tax rate to be applied
 * @return {Number} a new number that has the tax of the original number applied.
 * @examples
 *  Number(10).withTax(10) -> 11
 *  Number(200).withTax(50) -> 300
 */
Number.prototype.withTax = function withTax(rate) {
  return this + this.tax(rate);
};

/**
 * @desc Calculate the interest on a number given the interest rate, years, and optional
 * decimal places to round to
 * @function
 * @param {Number} rate - The interest rate
 * @param {Number} years - The amount of years the rate is applied to
 * return {String} a string containing the total interest paid on a given number
 */
Number.prototype.interest = function interest(rate, years, decimalPlaces = 2) {
  if (rate < 0) {
    throw new Error("You cannot enter a interest rate lower than 0%!");
  }

  if (years < 0) {
    throw new Error("You cannot go back in time! Enter a year greater than 0!");
  }

  const interestRate = rate / 100;
  return (this * (1 + interestRate * years)).toFixed(decimalPlaces);
};

/**
 * @desc Calculate the monthly payments for a mortage given a principal (Number)
 * @param {Number} numberOfYears - the years remaining for the mortage
 * @param {Number} interestRate - The yearly rate of interest
 */
Number.prototype.mortage = function mortage(interestRate, numberOfYears) {
  if (numberOfYears < 0) {
    throw new Error(
      "You cannot have a negative amount of years to make payments!",
    );
  }

  if (interestRate <= 0) {
    throw new Error("You cannot have a negative or 0 interest rate!");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = numberOfYears * 12;
  // Top half of the mortage equation
  const numerator = Math.pow(1 + monthlyInterest, totalPayments);
  // Bottom half of the mortage equation
  const denominator = Math.pow(1 + monthlyInterest, totalPayments) - 1;
  return (this * monthlyInterest * numerator) / denominator;
};
