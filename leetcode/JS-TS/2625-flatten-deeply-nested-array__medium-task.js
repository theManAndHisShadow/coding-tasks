/**
 * Task description:
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array. 
 * A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays. 
 * A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
 * This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
 * 
 *  Please solve it without the built-in Array.flat method.
 * 
 * Constraints:
 * 0 <= count of numbers in arr <= 10^5
 * 0 <= count of subarrays in arr <= 10^5
 * maxDepth <= 1000
 * -1000 <= each number <= 1000
 * 0 <= n <= 1000
*/

/**
 * Solution:
 */

/**
 * Flattens nested array to flat array.
 * @param {Array} arr - array to flattetn
 * @param {number} depth - depth of flattening
 * @return {Array} - flattened result array
 */
const flat = function (arr, n) {
    // initial empty array for result array
    let flattened = [];
    
    // check each item of input arr
    arr.forEach((item, i) => {
        // if item of input arr is an array
        if(Array.isArray(item) && n > 0) {
            // using recursion 'flat' with n - 1 (level deeper) for all nested arrays
            flattened.push(...flat(item, n - 1));
        } else {
            // if item is not an array - push item to flattened array
            flattened.push(item);
        }
    });

    /**
     * N.B:
     * Explored alternatives to replace recursion - discovered the concept 'iterative depth-first search, DFS'
     * which turns the entire original array into a data structure called a "stack" 
     * - where a stack is an array of "layers" 
     * - and a layer is a "pair of array [value, nesting level (depth)"].
     * 
     * 1. create result array: result = [],
     * 2. turn all items to stack: arr.map(item => [item, n]),
     * 3. recursion is simulated here by checking the value of the stack slice: stack = Array.isArray(current) && depth > 0,
     * 4. if the slice also contains nested arrays - expand the layer into a common stack: stack.push(...current.map(item => [item, depth - 1])),
     * 5. else value is not array - just push to result: result.push(current);
     * 6. beacuse this example uses LIFO - reverse result: result.reverse()
     * 
     * This method works better and faster with arrays with nested level > 1000.
    */


    return flattened;
};


// some presets
let some_array_example_1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let some_array_example_2 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let some_array_example_3 = [1, [2, [3, [4, [5, [6, [7]]]]]]];

// some tests
let flattened_1 = flat(some_array_example_1, 0);
let flattened_2 = flat(some_array_example_1, 1);
let flattened_3 = flat(some_array_example_2, 2);
let flattened_4 = flat(some_array_example_3, 2);

console.log(flattened_1); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flattened_2); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flattened_3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(flattened_4); // [ 1, 2, 3, 4, 5, 6, [ 7 ] ]
