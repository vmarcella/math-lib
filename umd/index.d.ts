/**
 * @desc The golden ratio as approximated by: https://en.wikipedia.org/wiki/Golden_ratio
 * @type {Number}
 */
export declare const GOLDENRATIO: number;
/**
 * @function
 * @desc Round a number to it's nearest whole number
 * @return {Number} the closest whole number to the original number
 */
export declare function round(num: number): number;
/**
 * @function
 * @desc Round a number down to it's nearest whole number.
 * @return {Number} the closest whole number to the rounded down original number.
 */
export declare function floor(num: number): number;
/**
 * @function
 * @desc Round a number up to it's closest whole number
 * @return {Number} the closest whole number to the rounded up original number.
 * @example
 * Number(5.32).ceil() -> 6
 */
export declare function ceil(num: number): number;
/**
 * @function
 * @desc Pad a number with a specified amount of zeros (On either the left or right side)
 * @return {String} A padded string that indicates.
 * @example
 * Number(5.3234).pad(4,5) -> 0004.32340
 * Number(4.34).pad(2,0) -> 04.34
 * Number(23.32).pad(10,10) -> 0000000023.3200000000
 */
export declare function pad(num: number, leftPadding: number, rightPadding: number): string;
/**
 * @function
 * @desc Convert a number from degrees to radians
 * @return {Number} The converted number in radians
 * @example
 * Number(20).degToRad() -> 0.349066
 */
export declare function degToRad(num: number): number;
/**
 * @function
 * @desc Convert a number from radians to degrees
 * @return {Number} the converted number in degrees.
 * @example
 * Number(1).radToDeg() -> 57.2958
 */
export declare function radToDeg(num: number): number;
/**
 * @function
 * @desc Convert a number to USD.
 * @return {String} The dollar representation of the number
 * @example
 * Number(1).toDollars() -> $1.00
 * Number(1.05).toDollars() -> $1.05
 * Number(0.5).toDollars() -> ¢0.5
 */
export declare function toDollars(num: number): string;
/**
 * @function
 * @desc Return the tax amount from the number that would be applied given the rate
 * @param {Number} rate - The tax rate to be applied where the rate is 0 <= rate <= 100
 * or the rate is 0 <= 100
 * @return {Number} the total tax amount of the current number multiplied by the rate
 * @example
 * Number(10).tax(10) -> 1.00
 * Number(60).tax(25) -> 15.00
 */
export declare function tax(num: number, rate: number): number;
/**
 * @function
 * @desc Return this number with a specified tax rate applied to it.
 * @param {Number} rate - The tax rate to be applied
 * @return {Number} a new number that has the tax of the original number applied.
 * @example
 * Number(10).withTax(10) -> 11
 * Number(200).withTax(50) -> 300
 */
export declare function withTax(num: number, rate: number): number;
/**
 * @function
 * @desc Calculate the interest on a number given the interest rate, years, and optional
 * decimal places to round to
 * @param {Number} rate - The interest rate
 * @param {Number} years - The amount of years the rate is applied to
 * @return {String} a string containing the total interest paid on a given number
 * @example
 * Number(10).interest(1, 10) -> "110.00"
 * Number(2).interest(80, 50) -> "82.00"
 */
export declare function interest(num: number, rate: number, years: number, decimalPlaces?: number): string;
/**
 * @function
 * @desc Calculate the monthly payments for a mortage given a principal (Number)
 * @param {Number} numberOfYears - the years remaining for the mortage
 * @param {Number} interestRate - The yearly rate of interest
 * @return {Number} The monthly mortage payments that need to be made to pay off the mortage
 * @example
 * Number(100000).mortage(3.92, 30) -> (Roughly) 473
 * Number(50000).mortage(5.0, 10) -> (Roughly) 530
 */
export declare function mortage(num: number, interestRate: number, numberOfYears: number): number;
/**
 * @function
 * @desc convert a decimal number to hexadecimal, all thanks to the help of this
 * stack overflow question: https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
 * @return {String} The string containing the number converted to hexadecimal
 * @example
 * Number(0).decimalToHex() -> "0"
 * Number(15).decimalToHex() -> "0xF"
 */
export declare function decimalToHex(num: number): string;
declare const _default: {
    pad: typeof pad;
    round: typeof round;
    floor: typeof floor;
    ceil: typeof ceil;
    degToRad: typeof degToRad;
    radToDeg: typeof radToDeg;
    toDollars: typeof toDollars;
    tax: typeof tax;
    withTax: typeof withTax;
    interest: typeof interest;
    mortage: typeof mortage;
    decimalToHex: typeof decimalToHex;
};
export default _default;
