test("there is no I in team", () => {
  expect("team").not.toMatch(/i/);
});
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice";

test("capitalize", () => {
  expect(capitalize("string")).toMatch("String");
});

test("capitalize number", () => {
  expect(capitalize(4)).toBe(false);
});

test("reverseString", () => {
  expect(reverseString("string")).toMatch("gnirts");
});

test("calculator", () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
});

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher again", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
