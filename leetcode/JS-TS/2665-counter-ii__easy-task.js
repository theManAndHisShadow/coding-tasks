/**
 * Task description:
 * Write a function createCounter. It should accept an initial integer init. 
 * It should return an object with three functions. 
 * The three functions are: 
 * - increment() increases the current value by 1 and then returns it. 
 * - decrement() reduces the current value by 1 and then returns it. 
 * - reset() sets the current value to init and then returns it.
 * 
 * Constraints:
 * -1000 <= init <= 1000
 * 0 <= calls.length <= 1000
 * calls[i] is one of "increment", "decrement" and "reset"
*/

/**
 * Solution:
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let counter = init;

    return {
        /**
         * Increments counter value by 1.
         * @returns {number} - counter current value.
         */
        increment(){
            counter += 1;
            return counter;
        },

        /**
         * Decrements counter value by 1.
         * @returns {number} - counter current value.
         */
        decrement(){
            counter -= 1;
            return counter;
        },

        /**
         * Reset counter value to 'init' value.
         * @returns {number} - counter current value.
         */
        reset(){
            counter = init;
            return counter;
        }
    }
};

// example 1
const counter = createCounter(5)
console.log(counter.increment());                 // 6
console.log(counter.reset());                     // 5
console.log(counter.decrement());                 // 4