/* global test expect  */
require("./index.js");

test("Rounding a number to it's nearest whole number", () => {
  expect(Number(4.345).round()).toBe(4);
  expect(Number(43.524).round()).toBe(44);
  expect(Number(20.01).round()).not.toBe(21);
});

test("Rounding a number down with floor", () => {
  expect(Number(4.8).floor()).toBe(4);
  expect(Number(5).floor()).toBe(5);
  expect(Number(5.5).floor()).toBe(5);
});

test("Rounding a number up with ceil", () => {
  expect(Number(4.8).ceil()).toBe(5);
  expect(Number(4.2).ceil()).toBe(5);
  expect(Number(7).ceil()).toBe(7);
});

test("Padding a number to either side of a number", () => {
  expect(Number(4.8).pad(4, 4)).toBe("0004.8000");
  expect(Number(10.1).pad(2, 2)).toBe("10.10");
  expect(Number(10.1).pad(0, 0)).toBe("10.1");
  expect(Number(200).pad(3, 3)).toBe("200");
  expect(Number(0.0).pad(2, 2)).toBe("00");
  expect(Number(2434.3443).pad(2, 2)).toBe("2434.3443");
  expect(Number(2.3456789).pad(10, 0)).toBe("0000000002.3456789");
});

test("Converting a number from degress to radians", () => {
  expect(Number(0).degToRad()).toBe(0);
  expect(Number(1).degToRad()).toBeCloseTo(0.0174533);
  expect(Number(-200).degToRad()).toBeCloseTo(-3.49066, 5);
  expect(Number(200).degToRad()).toBeCloseTo(3.49066, 5);
});

test("Converting a number from radians to degrees", () => {
  expect(Number(0).radToDeg()).toBe(0);
  expect(Number(1).radToDeg()).toBeCloseTo(57.2958, 4);
  expect(Number(200).radToDeg()).toBeCloseTo(11459.2, 1);
  expect(Number(-200).radToDeg()).toBeCloseTo(-11459.2, 1);
});

test("Converting a number to it's dollar representation", () => {
  expect(Number(0).toDollars()).toBe("$0.00");
  expect(Number(5.01).toDollars()).toBe("$5.01");
  expect(Number(0.534).toDollars()).toBe("¢0.534");
  expect(Number(456.33233333).toDollars()).toBe("$456.33233333");
});

test("Calcuting the tax on a number", () => {
  expect(() => Number(1).tax(101)).toThrow();
  expect(() => Number(1).tax(-100)).toThrow();

  expect(Number(0).tax(0)).toBe(0);
  expect(Number(0).tax(1)).toBe(0);

  expect(Number(1).tax(1)).toBe(0.01);
  expect(Number(1).tax(0)).toBe(0);

  expect(Number(300).tax(45)).toBe(135);
  expect(Number(100).tax(100)).toBe(100);
});

test("Calculating the tax on a number with the tax applied to the number", () => {
  expect(() => Number(1).withTax(101)).toThrow();
  expect(() => Number(1).withTax(-1)).toThrow();

  expect(Number(100).withTax(100)).toBe(200);
  expect(Number(100).withTax(1)).toBe(101);

  expect(Number(10).withTax(5)).toBe(10.5);
});

test("Calculating the interest on a given number", () => {
  expect(() => Number(1).interest(-1, 2)).toThrow();
  expect(() => Number(2).interest(100, -2)).toThrow();

  expect(Number(100).interest(1, 10)).toBe("110.00");
  expect(Number(2).interest(80, 50)).toBe("82.00");
  expect(Number(15).interest(1, 1000)).toBe("165.00");
});

test("Calculating the monthly payments for a mortage", () => {
  expect(() => Number(100000).mortage(-1, 1)).toThrow();
  expect(() => Number(100000).mortage(0, 0)).toThrow();
  expect(() => Number(100000).mortage(0, -1)).toThrow();

  expect(Number(100000).mortage(3.92, 30)).toBeCloseTo(473, 0);
  expect(Number(50000).mortage(5.0, 10)).toBeCloseTo(530, 0);
});
