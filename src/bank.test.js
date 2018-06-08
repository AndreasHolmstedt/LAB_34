import {deposit, withdraw, transfer, kalle, greta } from './bank';

describe("Bank Transfer Tests", ()=> {
    test("Throws an error when transfering to non existing account", () => {
        expect( () => transfer(kalle, tjorven, 120)).toThrow();
    });
    test("Throws an error when transfering from non existing account", () => {
        expect( () => transfer(gretu, kalle, 120)).toThrow();
    });
    test("Throws an error when the amount is negative", () => {
        expect( () => transfer(kalle, greta, -120)).toThrow();
    });
    test("Throws an error when the amount is not a number", () => {
        expect( () => transfer(kalle, greta, "hello")).toThrow();
    });
});

describe("Bank Withdraw Tests", ()=> {
    test("Throws an error when withdrawing too much", () => {
        expect( () => withdraw(kalle, 170)).toThrow();
    });
    test("Throws an error when withdrawing negative amount", () => {
        expect( () => withdraw(kalle, -170)).toThrow();
    });
    test("Throws an error when withdrawing a non-number", () => {
        expect( () => withdraw(kalle, "hej")).toThrow();
    });
    test("Throws an error when withdrawing from nonexisting account", () => {
        expect( () => withdraw(tjorven, 170)).toThrow();
    });
});

describe("Bank Deposit Tests", ()=> {
    test("Throws an error when depositing to non existing account", () => {
        expect( () => deposit(tjorven, 120)).toThrow();
    });
    test("Throws an error when the amount is negative", () => {
        expect( () => deposit(kalle, -120)).toThrow();
    });
    test("Throws an error when the amount is not a number", () => {
        expect( () => deposit(kalle, "kaka")).toThrow();
    });
});