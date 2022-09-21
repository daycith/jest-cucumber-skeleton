
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from "chai";
import { Calculator } from "../../src/calculator";

let calculator: Calculator;
let result: number;
Given('A running calculator', ()=> {
    calculator = new Calculator;
});


When('I enter the numbers {string} and {string}', (num1: number, num2: number) => {

    result = calculator.sum(Number(num1),Number(num2));
});


Then('I should receive {string} as result', (sum: string) => {   
    expect(result).to.be.equal(result)
    // console.log("result ", result)
});

// https://www.youtube.com/watch?v=DC-sYOiEJ6A