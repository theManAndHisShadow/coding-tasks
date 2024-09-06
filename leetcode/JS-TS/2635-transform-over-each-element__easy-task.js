/**
 * Task description:
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. 
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i). 
 * 
 * Please solve it without the built-in Array.map method.
 * 
 * Constraints:
 * 0 <= arr.length <= 1000
 * -10^9 <= arr[i] <= 10^9
 * fn returns a number
*/

/**
 * Solution:
 */

/**
 * Transforms each element of the original array using fn(item, index) and returns a new array.
 * @param {number[]} arr - target array.
 * @param {Function} fn - map function callback.
 * @return {number[]} - new array with transformed elements.
 */
const map = function(arr, fn) {
    // prepare empty array
    let mutated = [];

    // mutate each items
    arr.forEach((item, i) => {
        mutated.push(fn(item, i));
    });

    return mutated;
};

// example 1
let some_array_1 = [1, 2, 3];
let mutatedArray_1 = map(some_array_1, n => n + 1);
console.log(mutatedArray_1);

// example 2
let some_array_2 = [1, 2, 3];
let mutatedArray_2 = map(some_array_2, (n, i) => n + i);
console.log(mutatedArray_2);

// example 3
let some_array_3 = [10,20,30];
let mutatedArray_3 = map(some_array_3, (n, i) => 42);
console.log(mutatedArray_3);