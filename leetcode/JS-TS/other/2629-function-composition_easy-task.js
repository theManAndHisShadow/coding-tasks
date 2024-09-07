/**
 * Task description:
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. 
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x. 
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 * 
 * Constraints:
 * -1000 <= x <= 1000
 * 0 <= functions.length <= 1000
 * all functions accept and return a single integer
*/

/**
 * Solution:
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
    let composed = x => {
        return functions.reduceRight((accum, fn) => fn(accum), x);
    }

    return function (x) {
        return composed(x);
    }
};


const fn = compose([x => x + 1, x => 2 * x, x => 2 * x, x => 2 * x, x => 2 * x, x => 2 * x])
console.log(fn(5)) // 161