/**
 * Task description:
 * Given an array arr and a chunk size size, return a chunked array. 
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size. 
 * You may assume the array is the output of JSON.parse. 
 * In other words, it is valid JSON. 
 * 
 * Please solve it without using lodash's _.chunk function. (Comment from me - lol, who uses 'lodash' in 2024? xD)
 * 
 * Constraints:
 * arr is a valid JSON array
 * 2 <= JSON.stringify(arr).length <= 105
 * 1 <= size <= arr.length + 1
*/

/**
 * Solution:
 */

/**
 * Returns copy of original array grouped by chunks. Uses classic methods.
 * @param {Array} arr - original target array
 * @param {number} size - size of chunk group
 * @return {Array} - chunked copy of orignal array
 */
const chunk = function (arr, size = 1) {
    // Create empty array with length of chunked array, then fill with chunks
    return Array(Math.ceil(arr.length / size)).fill().map((item, i, thisArray) => {
        let start = i == 0 ? i : i * size;          // copy start pos
        let end = i == 0 ? size : start + size;     // copy end pos

        // return partitially copy of original array
        return arr.slice(start, end);
    });
};

// example 1
let some_array_example_1 = [1, 2, 3, 4, 5];
let chunked_1 = chunk(some_array_example_1, 1);
console.log(chunked_1);

let some_array_example_2 = [1, 9, 6, 3, 2];
let chunked_2 = chunk(some_array_example_2, 3);
console.log(chunked_2);

let some_array_example_3 = [8, 5, 3, 2, 6];
let chunked_3 = chunk(some_array_example_3, 6);
console.log(chunked_3);

let some_array_example_4 = [];
let chunked_4 = chunk(some_array_example_4, 1);
console.log(chunked_4);