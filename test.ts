/* global test expect  */
import numlib from "./index";

test("Rounding a number to it's nearest whole number", (): void => {
  expect(numlib.round(3.6)).toBe(4);
  expect(numlib.round(43.524)).toBe(44);
  expect(numlib.round(20.01)).not.toBe(21);
});

test("Rounding a number down with floor", (): void => {
  expect(numlib.floor(4.8)).toBe(4);
  expect(numlib.floor(5)).toBe(5);
  expect(numlib.floor(5.5)).toBe(5);
});

test("Rounding a number up with ceil", (): void => {
  expect(numlib.ceil(4.8)).toBe(5);
  expect(numlib.ceil(4.2)).toBe(5);
  expect(numlib.ceil(7)).toBe(7);
});

test("Padding a number to either side of a number", (): void => {
  expect(numlib.pad(4.8, 4, 4)).toBe("0004.8000");
  expect(numlib.pad(10.1, 2, 2)).toBe("10.10");
  expect(numlib.pad(10.1, 0, 0)).toBe("10.1");
  expect(numlib.pad(200, 3, 3)).toBe("200");
  expect(numlib.pad(0.0, 2, 2)).toBe("00");
  expect(numlib.pad(2434.3443, 2, 2)).toBe("2434.3443");
  expect(numlib.pad(2.3456789, 10, 0)).toBe("0000000002.3456789");
});

test("Converting a number from degress to radians", (): void => {
  expect(numlib.degToRad(0)).toBe(0);
  expect(numlib.degToRad(1)).toBeCloseTo(0.0174533);
  expect(numlib.degToRad(-200)).toBeCloseTo(-3.49066, 5);
  expect(numlib.degToRad(200)).toBeCloseTo(3.49066, 5);
});

test("Converting a number from radians to degrees", (): void => {
  expect(numlib.radToDeg(0)).toBe(0);
  expect(numlib.radToDeg(1)).toBeCloseTo(57.2958, 4);
  expect(numlib.radToDeg(200)).toBeCloseTo(11459.2, 1);
  expect(numlib.radToDeg(-200)).toBeCloseTo(-11459.2, 1);
});

test("Converting a number to it's dollar representation", (): void => {
  expect(numlib.toDollars(0)).toBe("$0.00");
  expect(numlib.toDollars(5.01)).toBe("$5.01");
  expect(numlib.toDollars(0.534)).toBe("¢0.534");
  expect(numlib.toDollars(456.33233333)).toBe("$456.33233333");
});

test("Calcuting the tax on a number", (): void => {
  expect((): number => numlib.tax(1, 101)).toThrow();
  expect((): number => numlib.tax(1, -100)).toThrow();

  expect(numlib.tax(0, 0)).toBe(0);
  expect(numlib.tax(0, 1)).toBe(0);

  expect(numlib.tax(1, 1)).toBe(0.01);
  expect(numlib.tax(0, 1)).toBe(0);

  expect(numlib.tax(300, 45)).toBe(135);
  expect(numlib.tax(100, 100)).toBe(100);
});

test("Calculating the tax on a number with the tax applied to the number", (): void => {
  expect((): number => numlib.withTax(1, 101)).toThrow();
  expect((): number => numlib.withTax(1, -1)).toThrow();

  expect(numlib.withTax(100, 100)).toBe(200);
  expect(numlib.withTax(100, 1)).toBe(101);

  expect(numlib.withTax(10, 5)).toBe(10.5);
});

test("Calculating the interest on a given number", (): void => {
  expect((): string => numlib.interest(1, -1, 2)).toThrow();
  expect((): string => numlib.interest(2, 100, -2)).toThrow();

  expect(numlib.interest(100, 1, 10, 2)).toBe("110.00");
  expect(numlib.interest(2, 80, 50)).toBe("82.00");
  expect(numlib.interest(15, 1, 1000)).toBe("165.00");
});

test("Calculating the monthly payments for a mortage", (): void => {
  expect((): number => numlib.mortage(100000, -1, 1)).toThrow();
  expect((): number => numlib.mortage(100000, 0, 0)).toThrow();
  expect((): number => numlib.mortage(100000, 0, -1)).toThrow();

  expect(numlib.mortage(100000, 3.92, 30)).toBeCloseTo(473, 0);
  expect(numlib.mortage(50000, 5.0, 10)).toBeCloseTo(530, 0);
  expect(numlib.mortage(0, 100, 100)).toBe(0);
});

test("Converting a number to hexadecimal", (): void => {
  expect(numlib.decimalToHex(0)).toBe("0x0");
  expect(numlib.decimalToHex(15)).toBe("0xF");
  expect(numlib.decimalToHex(-16)).toBe("0xFFFFFFF0");
  expect(numlib.decimalToHex(-1)).toBe("0xFFFFFFFF");
});
