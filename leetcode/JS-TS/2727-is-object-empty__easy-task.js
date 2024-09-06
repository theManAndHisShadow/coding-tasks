/**
 * Task description: 
 * Given an object or an array, return if it is empty.  
 * An empty object contains no key-value pairs. An empty array contains no elements. 
 * You may assume the object or array is the output of JSON.parse.
 *
 * Constraints: 
 * -> obj is a valid JSON object or array
 * -> 2 <= JSON.stringify(obj).length <= 105
*/

/**
 * Solution:
 */

/**
 * Checks if given obj/array is empty
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

// Examples
console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));