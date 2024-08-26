/**
 * Task description:
 * Given an integer n, return a counter function. 
 * This counter function initially returns n and then returns 1 more 
 * than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 * 
 * Constraints:
 * -1000 <= n <= 1000
 * 0 <= calls.length <= 1000
 * calls[i] === "call"
*/

/**
 * Solution:
 */

/**
 * Returnsn + 1 each time when function is called
 * @param {number} n - given number
 * @return {Function} - counter function
 */
const createCounter = function(n) {
    let store = n - 1;

    return function() {
        return store += 1;
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12