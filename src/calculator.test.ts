import { Calculator } from "./calculator";

let calculator: Calculator;



describe("Calculator", () => {

    beforeEach(() => {
        calculator = new Calculator();

    })

    it("Should test sum", () => {
        const result: number = calculator.sum(3,2)
        expect(result).toBe(5)
    })
})