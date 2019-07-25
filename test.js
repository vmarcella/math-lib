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
