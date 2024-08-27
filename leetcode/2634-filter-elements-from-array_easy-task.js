/**
 * Task description:
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr. 
 * The fn function takes one or two arguments: 
 *      arr[i] - number from the arr 
 *      i - index of arr[i] 
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. 
 * A truthy value is a value where Boolean(value) returns true. 
 * 
 * Please solve it without the built-in Array.filter method.
 * 
 * Constraints:
 * 0 <= arr.length <= 1000
 * -109 <= arr[i] <= 109
*/

/**
 * Solution:
 */

/**
 * Filters original array using fn(item, index) and return filtered copy.
 * @param {number[]} arr - target array.
 * @param {Function} fn - filter function callback.
 * @return {number[]} - filtered copy of original array.
 */
const filter = function(arr, fn) {
    // prepare empty array
    let filtered = [];

    arr.forEach((item, i) => {
        // if fn truthy - push item to filtered array
        if (fn(item, i)) {
            filtered.push(item);
        }
    });

    return filtered;
};

// example 1
let some_array_1 = [0, 10, 20, 30];
let filteredArray_1 = filter(some_array_1, n => n > 10);
console.log(filteredArray_1);

// example 2
let some_array_2 = [1, 2, 3];
let filteredArray_2 = filter(some_array_2, (n, i) => i === 0);
console.log(filteredArray_2);

// example 3
/** N.B.: The original Example 3 provided in the task description is incorrect. 
 * The example incorrectly references a `plusOne` function, which implies a `map` operation, 
 * while this task is focused on filtering elements from an array. The goal of this task is 
 * to filter the array based on a provided predicate function (`fn`) that returns a truthy 
 * value, not to modify the array elements. 
*/
let some_array_3 = [-2, -1, 0, 1, 2];
let filteredArray_3 = filter(some_array_3, (n, i) => n);
console.log(filteredArray_3);