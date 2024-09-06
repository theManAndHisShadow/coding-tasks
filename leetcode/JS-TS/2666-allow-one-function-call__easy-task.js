/**
 * Task description:
  * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.  
  * The first time the returned function is called, it should return the same result as fn. 
  * Every subsequent time it is called, it should return undefined.
 * 
 * Constraints:
 * -> calls is a valid JSON array
 * -> 1 <= calls.length <= 10
 * -> 1 <= calls[i].length <= 100
 * -> 2 <= JSON.stringify(calls).length <= 1000
*/

/**
 * Solution:
 */

/**
 * Calls fn function only one time
 * @param {Function} fn - target fn
 * @return {Function | undefined} - if function is not used yet - returns function, else - undefined
 */
const once = function (fn) {
    let counter = 0;
    
    return function (...args) {
        counter += 1;
        if(counter == 1) return fn(...args);
    }
};


// example
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

// check result
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn