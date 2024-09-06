/**
 * Task description:
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
 * If there are no elements in the array, it should return -1. You may assume the array is the output of JSON.parse.
 * 
 * Constraints:
 * arr is a valid JSON array
 * 0 <= arr.length <= 1000
*/

/**
 * Solution:
 */

/**
* Returns array's last item. 
* @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1];
};


const arr = [1, 2, 3];
let item = arr.last(); // 3
console.log(item);