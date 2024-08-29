/**
 * Task description:
 * Given a function fn, return a memoized version of that function. 
 * A memoized function is a function that will never be called twice with the same inputs. 
 * Instead it will return a cached value. 
 * You can assume there are 3 possible input functions: sum, fib, and factorial. 
 * - sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, 
 *   it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made. 
 * - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise. 
 * - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 * 
 * Constraints:
 * 0 <= a, b <= 10^5
 * 1 <= n <= 10
 * 0 <= actions.length <= 10^5
 * actions.length === values.length
 * actions[i] is one of "call" and "getCallCount"
 * fnName is one of "sum", "factorial" and "fib"
*/

/**
 * Solution:
 */

/**
 * Uses exact comparison and traverses all nested array elements for comparison.
 * @param {any[][]} searchArray - array of arrays 
 * @param {any[]} target - some array to compare
 * @returns {number} - returns the index of the array "target" in "searchArray" or -1 if "searchArray" does not contain the array "target"
 */
function accurateSearch(searchArray, target) {
    let current = [];

    // check each element of the searchArray
    for (let i = 0; i < searchArray.length; i++) {
        // searchArray item - nested array
        let nested = searchArray[i];

        // if length is equal
        if (target.length === nested.length) {
            // store as current
            current = nested;

            // If nested array item is eqaul with current search array item
            for (let j = 0; j <= target.length && target[j] === current[j]; j++) {
                // if all elements match and this is the last iteration of the loop
                if (j == target.length) {
                    // This means that the nested array and the target array are equal - return the position of the target array in the searchArray
                    // it interrupts all code execution below and return positive number
                    return i;
                }
            }
        }
    }

    // if code not interrupted - return -1
    return -1;
}


/**
 * Uses 'JSON.stringify' trick to find 'target' array at 'searchArray'
 * @param {any[][]} searchArray - array of arrays 
 * @param {any[]} target - some array to compare
 * @returns {number} - returns the index of the array "target" in "searchArray" or -1 if "searchArray" does not contain the array "target"
 */
function rudeSearch(searchArray, target) {
    // check each element of the searchArray
    for (let i = 0; i <= searchArray.length; i++) {
        // searchArray item - nested array
        let nested = searchArray[i];

        /**
         * Arrays cannot be compared directly, since they are stored in different memory addresses and are essentially different values. 
         * But we can turn arrays into strings - and then compare string with string. 
         * 
         * I don't know what could go wrong, so due to some uncertainty in the results of this technique, I created an 'AccurateSearch' alternative function
         */
        let nested_str = JSON.stringify(nested);
        let target_str = JSON.stringify(target);

        // if nested array === target array - return the position of the target array in the searchArray
        if (nested_str === target_str) return i;
    }

    return -1;
}


/**
 * Uses 'JSON.stringify' trick to find 'target' array at 'searchArray'
 * @param {any[][]} searchArray - array of arrays 
 * @param {any[]} target - some array to compare
 * @param {boolean} [useAccurateSearch=false] - search method - 'accurate' OR 'fast and rude'
 * @returns {number} - returns the index of the array "target" in "searchArray" or -1 if "searchArray" does not contain the array "target"
 */
function indexOfArrayInArray(searchArray, target, useAccurateSearch = false) {
    return useAccurateSearch === true ? accurateSearch(searchArray, target) : rudeSearch(searchArray, target);
}


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn, strict = false) {
    // Internal private cache var
    const cache = [];

    return function (...args) {
        if(fn) {
            // current fn args
            let fnArgs = Array.from(args);

            // search index of array of args in cache (using map to extract inly args array)
            let includes = indexOfArrayInArray([...cache.map(slice => slice.args)], fnArgs, strict);

            // if it is new element for cache
            if (includes == -1) {
                // execute and get result of fn
                let executionResult = fn(...args);

                // and push cache object {args, result}
                cache.push({ args: fnArgs, result: executionResult });

                return executionResult;
            } else {
                // extract result from cache
                return cache[includes].result;
            }
        }
    }
}



// Example 1
let sum_callCount = 0;
const sum = (a, b) => a + b;
const memoizedSumFn = memoize(function (a, b) {
    sum_callCount += 1;
    return sum(a, b);
});

console.log(memoizedSumFn(2, 2))                // 4
console.log(memoizedSumFn(2, 2))                // 4
console.log(memoizedSumFn(1, 2))                // 3
console.log('Call count:', sum_callCount)       // 2

// Example 2
let factorial_callCount = 0;
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoizedFactorialFn = memoize((n) => {
    factorial_callCount += 1;
    return factorial(n);
});

console.log(memoizedFactorialFn(2))             // 2
console.log(memoizedFactorialFn(3))             // 6
console.log(memoizedFactorialFn(2))             // 2
console.log('Call count:', factorial_callCount) // 2
console.log(memoizedFactorialFn(3))             // 6
console.log('Call count:', factorial_callCount) // 2  


// Example 3
let fib_callCount = 0;
const fib = (n) => { return n <= 1 ? 1 : (fib(n - 1) + fib(n - 2))};
const memoizedFibFn = memoize(n => {
    fib_callCount += 1;
    return fib(n);
});

console.log('fib', memoizedFibFn(5));           // 8
console.log('fib', memoizedFibFn(5));           // 8
console.log('Call count:', fib_callCount)       // 1

let a =  memoize();
a();