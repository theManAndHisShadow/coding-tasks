/**
 * Task description:
 * Given an integer array 'nums' sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
 * The relative order of the elements should be kept the same. Then return the number of unique elements in 'nums'.  
 * Consider the number of unique elements of 'nums' to be 'k', to get accepted, you need to do the following things:  
 * -> Change the array 'nums' such that the first 'k' elements of 'nums' contain the unique elements in the order they were present in 'nums' initially. 
 *    The remaining elements of 'nums' are not important as well as the size of 'nums'. 
 * -> Return 'k'.
 * 
 * Constraints:
 * 1 <= nums.length <= 3 * 104
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
*/

/**
 * Solution:
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let buffer = [];

    for(let i = 0; i < nums.length; i++) {
        if(buffer.indexOf(nums[i]) == -1) {
            buffer.push(nums[i]);
        } else {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

// example 1
let some_array_1 = [1, 1, 2];
let k_1 = removeDuplicates(some_array_1);
console.log(k_1, some_array_1);