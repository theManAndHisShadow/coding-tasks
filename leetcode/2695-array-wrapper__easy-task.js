/**
 * Task description:
 * Create a class ArrayWrapper that accepts an array of integers in its constructor. 
 * This class should have two features: 
 * When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays. 
 * When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 * 
 * Constraints:
 * 0 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 * Note: nums is the array passed to the constructor
*/

/**
 * Solution:
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums = []) {
        this.numbers = Array.isArray(nums) ? nums : [];
    }

    /**
     * @return {number}
     */
    valueOf() {
        return this.numbers.reduce((accum, curr) => accum + curr, 0);
    }

    /**
     * @return {string}
     */
    toString() {
        return `[${this.numbers.join(',')}]`;
    }
}



const instance_1 = new ArrayWrapper([1, 2]);
const instance_2 = new ArrayWrapper([3, 4]);
const instance_3 = new ArrayWrapper();

console.log(instance_1);
console.log(instance_2);

let value = instance_3.valueOf();
console.log(value);

// add
let sum = instance_1.valueOf() + instance_2.valueOf(); // 10
console.log(sum);

// string
let string_1 = instance_1.toString();
let string_2 = instance_2.toString();
console.log(string_1); // "[1,2]"
console.log(string_2); // "[3,4]"