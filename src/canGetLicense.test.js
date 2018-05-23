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
})
