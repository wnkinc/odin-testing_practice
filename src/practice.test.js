test("there is no I in team", () => {
  expect("team").not.toMatch(/i/);
});
import { capitalize, reverseString } from "./practice";

test("capitalize", () => {
  expect(capitalize("string")).toMatch("String");
});

test("capitalize number", () => {
  expect(capitalize(4)).toBe(false);
});

test("reverseString", () => {
  expect(reverseString("string")).toMatch("gnirts");
});
