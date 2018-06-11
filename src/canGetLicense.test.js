import {canGetLicense} from './canGetLicense';


describe("Drivers license check test suite", ()=> {
  test("Test A driving license", () => {
    expect(canGetLicense("A", 23)).toBe(false)
    expect(canGetLicense("A", 35)).toBe(true)
  })
  test("Test B driving license", () => {
    expect(canGetLicense("B", 18)).toBe(true)
    expect(canGetLicense("B", 16)).toBe(false)
    expect(canGetLicense("b", 18)).toBe(true)
    expect(canGetLicense("BE", 24)).toBe(true)
    expect(canGetLicense("BE", 17)).toBe(false)
  })
  test("Test C driving license", () => {
    expect(canGetLicense("C", 32)).toBe(true)
    expect(canGetLicense("C", 19)).toBe(false)
  })
  test("Test D driving license", () => {
    expect(canGetLicense("D", 24)).toBe(true)
    expect(canGetLicense("D", 21)).toBe(false)
  })
  test("Should throw an error when trying to get a license when age is not a number", () => {
    expect( () => { canGetLicense("g", "hej") }).toThrow()
  })
  test("Should throw an error when the license is not a string", () => {
    expect( () => { canGetLicense(2, "alf") }).toThrow()
  })
})
