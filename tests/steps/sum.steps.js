"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const calculator_1 = require("../../src/calculator");
let calculator;
let result;
(0, cucumber_1.Given)('A running calculator', () => {
    calculator = new calculator_1.Calculator;
});
(0, cucumber_1.When)('I enter the numbers {string} and {string}', (num1, num2) => {
    result = calculator.sum(Number(num1), Number(num2));
});
(0, cucumber_1.Then)('I should receive {string} as result', (sum) => {
    (0, chai_1.expect)(result).to.be.equal(result);
    // console.log("result ", result)
});
// https://www.youtube.com/watch?v=DC-sYOiEJ6A
