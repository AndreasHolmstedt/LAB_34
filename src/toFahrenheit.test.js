import { toFahrenheit } from './toFahrenheit';

describe("Fahrenheit converter test suite", () => {
  test("...", () => {
    expect(toFahrenheit(5)).toBe(5 * 9/5 + 32)
  })
  test("...", () => {
    expect(toFahrenheit(10)).toBe(10 * 9/5 + 32)
  })
  test("...", () => {
    expect(toFahrenheit("10")).toBe(10 * 9/5 + 32)
  })
  test("...", () => {
    expect(toFahrenheit("1204")).toBe(1204 * 9/5 + 32)
  })
  test("...", () => {
    expect(toFahrenheit(Infinity)).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit(null)).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit("a string")).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit(undefined)).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit(-273.16)).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit("-271.16")).toBe(-271.16 * 9/5 + 32)
  })
  test("...", () => {
    expect(toFahrenheit(true)).toBeNaN()
  })
  test("...", () => {
    expect(toFahrenheit(false)).toBeNaN()
  })
})
