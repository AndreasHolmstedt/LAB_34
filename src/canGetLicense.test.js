import {canGetLicense} from './canGetLicense';


describe("Drivers license check test suite", ()=> {
  test("...", () => {
    expect(canGetLicense("B", 18)).toBe(true)
  })
  test("...", () => {
    expect(canGetLicense("b", 18)).toBe(true)
  })
  test("...", () => {
    expect(canGetLicense("C", 32)).toBe(true)
  })
  test("Should throw an error when trying to get a license when age is not a number", () => {
    expect( () => { canGetLicense("g", "hej") }).toThrow()
  })
  test("Should throw an error when the license is not a string", () => {
    expect( () => { canGetLicense(2, "alf") }).toThrow()
  })
})
