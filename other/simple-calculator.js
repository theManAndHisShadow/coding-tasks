/**
 * Create a simple calculator object with the following methods:
 * - `add`: Adds a number to the current value.
 * - `subtract`: Subtracts a number from the current value.
 * - `multiply`: Multiplies the current value by a number.
 * - `divide`: Divides the current value by a number.
 * - `repeat`: Performs some repeat (a sequence of operations).
 * - `getValue`: Returns the current value.
 * 
 * The object starts with an initial value of 0 and supports chaining of operations.
 * 
 * Example usage:
 * ```javascript
 * const calc = calculator();               // Starts with 0
 * 
 * calc.add(10);                            // Adds 10
 * calc.multiply(2);                        // Multiplies by 2
 * calc.subtract(5);                        // Subtracts 5
 * calc.divide(3);                          // Divides by 3
 * console.log(calc.getValue());            // Current result: 5
 * 
 * calc.repeat(calc.add)(2)(3)(4);          // Adds 2, then 3, then 4 to the result
 * console.log(calc.getValue());            // Final result: 14
 * ```
 * 
 * Notes:
 * - If dividing by 0, the `divide` method should return an error: `new Error('Cannot divide by zero.')`.
 * - The methods `add`, `subtract`, `multiply`, and `divide` take a single number as an argument and do not return anything.
 * - The `repeat` method takes an initial function as an argument, and should return a function that takes a single argument, 
 *   modifies the internal state, and returns another function that also takes a single argument.
 * - If the `repeat` function is given `divide` and a division by zero occurs, the error should be ignored.
 */

/**
 * Solution:
 */

/**
 * Calculator constructor function.
 */
function calculator() {
    let store = 0;

    return {
        /**
         * Adds the specified number to the internal accumulated value.
         * @param {number} operand - operation operand number. 
         */
        add(operand){
            store += operand;
        },

        /**
         * Subtracts the specified number from the internal accumulated value.
         * @param {number} operand - operation operand number. 
         */
        subtract(operand){
            store -= operand;
        },

        /**
         * Multiplies internal accumulated value to given operand.
         * @param {number} operand - operation operand number. 
         */
        multiply(operand){
            store *= operand;
        },

        /**
         * Devides internal accumulated value to given operand.
         * @param {number} operand - operation operand number. 
         */
        divide(operand){
            store /= operand;
        },

        /**
         * Returns the repeat function itself and repeats the given math operation 
         * as many times as a chain of blocks of parentheses (with the indication of the operand number)
         * @param {Function} operation - calc operation, for example `calc.repeat(calc.add)(1)(2)(6)`
         * @returns {Function} - calc.repeat function
         */
        repeat(operation){
            return (operand) => {
                // using 'Function.prototype.call()' method to call operation function with current thi context and pass operand number to operation function
                operation.call(this, operand);

                return this.repeat(operation);
            }
        },

        /**
         * Returns total result.
         */
        getValue(){
            return store;
        },

    }
}

const calc = calculator();              // Starts with 0
 
calc.add(10);                           // Adds 10
calc.multiply(2);                       // Multiplies by 2
calc.subtract(5);                       // Subtracts 5
calc.divide(3);                         // Divides by 3 
console.log(calc.getValue());           // Current result: 5

calc.repeat(calc.add)(2)(3)(4);
console.log(calc.getValue());           // Final result: 14