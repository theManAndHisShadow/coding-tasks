/**
 * Task description:
 * Given an integer array nums, a reducer function fn, and an initial value init, 
 * return the final result obtained by executing the fn function on each element of the array, sequentially, 
 * passing in the return value from the calculation on the preceding element. 
 * 
 * This result is achieved through the following operations: 
 * val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. 
 * The ultimate value of val is then returned. If the length of the array is 0, the function should return init. 
 * 
 * Please solve it without using the built-in Array.reduce method.
 * 
 * Constraints:
 * 0 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 * 0 <= init <= 1000
*/

/**
 * Solution:
 */

/**
 * Reducer function - summ all items of given number array, returns sum value.
 * @param {number[]} nums - given number array.
 * @param {Function} fn - reducer callback funcion.
 * @param {number} init - initial value of reduce process, by default = 0.
 * @return {number} - summ value of reduce process.
 */
const reduce = function(nums, fn, init = 0) {
    // if nums is empty arr - returns initial value
    let accum = init;

    nums.forEach((number) => {
        // updating value of accum from fn, that has access to accum and current number
        accum = fn(accum, number);
    });

    return accum;
};

const dataset_1 = [1, 2, 3, 4];

let sum_1 = reduce(dataset_1, (accum, current) => { return accum + current }, 0);
let sum_2 = reduce(dataset_1, (accum, current) => { return accum + current * current}, 100);
let sum_3 = reduce(dataset_1, (accum, current) => { return 0;}, 25);

console.log(sum_1, sum_2, sum_3);