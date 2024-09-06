/**
 * Task description:
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array 
 * and it will return a grouped version of the array. A grouped array is an object where each key is the output of fn(arr[i]) 
 * and each value is an array containing all items in the original array with that key. 
 * The provided callback fn will accept an item in the array and return a string key. 
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable. 
 * 
 * Please solve it without lodash's _.groupBy function.
 * 
 * Constraints:
 * 0 <= array.length <= 10^5
 * fn returns a string
*/

/**
 * Solution:
 */

/**
 * Groups array using callback function, that returns group criteria
 * @param {Function} fn - criteria returning function
 * @return {Object} - grouped array result
 */
Array.prototype.groupBy = function (fn) {
    // init result object
    let result = {};

    // go through the entire array
    for(let i = 0; i < this.length; i++){
        let item = this[i];
        // criteria returned by callback fn
        let criteria = fn(item);

        // if is new group criteria
        if(!result[criteria]) {
            // set array as value of new criteria
            result[criteria] = [item];
        } else {
            // if criteria already exist - just push item as part of existing group
            result[criteria].push(item);
        }
    }

    // return grouped array as object
    return result;
};

// example 1
let some_array_1 = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
];

let grouped_1 = some_array_1.groupBy(item => item.id) // { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }
console.log(grouped_1);


// example 2
let some_array_2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];

let grouped_2 = some_array_2.groupBy(list => String(list[0]));
console.log(grouped_2); // { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }


// example 3 
let some_array_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let grouped_3 = some_array_3.groupBy(n => String(n > 5));
console.log(grouped_3);


// example 4
let some_array_4 = [1, 50, 69, 84, 82, 57, 60, 2, 16, 24, 88, 23, 28, 83, 80, 24, 43, 89, 12, 74, 45, 77, 55, 39, 9, 94, 33, 17, 63, 24, 66, 58, 46, 56, 17, 7, 1, 85, 82, 17, 74, 35, 5, 40, 26, 82, 55, 93, 69];
let grouped_4 = some_array_4.groupBy(n => String(n > 50));
console.log(grouped_4);