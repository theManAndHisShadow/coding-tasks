/**
 * Task description: 
 * Design a Calculator class. 
 * It should also allow consecutive operations to be performed using method chaining. 
 * The Calculator class constructor should accept a number which serves as the initial value of result.  
 * Your Calculator class should have the following methods:  
 * -> add - This method adds the given number value to the result and returns the updated Calculator. 
 * -> subtract - This method subtracts the given number value from the result and returns the updated Calculator. 
 * -> multiply - This method multiplies the result  by the given number value and returns the updated Calculator. 
 * -> divide - This method divides the result by the given number value and returns the updated Calculator. 
 *    If the passed value is 0, an error "Division by zero is not allowed" should be thrown. 
 * -> power - This method raises the result to the power of the given number value and returns the updated Calculator. 
 * -> getResult - This method returns the result. Solutions within 10-5 of the actual result are considered correct.
 *
 * Constraints: 
 * -> actions is a valid JSON array of strings
 * -> values is a valid JSON array of numbers
 * -> 2 <= actions.length <= 2 * 104
 * -> 1 <= values.length <= 2 * 104 - 1
 * -> actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
 * -> First action is always "Calculator"
 * -> Last action is always "getResult"
*/

/**
 * Solution:
 */

class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value == 0) {
            throw new Error("Division by zero is not allowed");
        }

        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = this.result ** value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

// example 1
let result_1 = new Calculator(10).add(5).subtract(7).getResult();   // 10 + 5 - 7 = 8
console.log(result_1);

// example 2
let result_2 = new Calculator(2).multiply(5).power(2).getResult(); // (2 * 5) ^ 2 = 100
console.log(result_2);

// example 3
let result_3 = new Calculator(20).divide(0).getResult();           // 20 / 0
console.log(result_3);