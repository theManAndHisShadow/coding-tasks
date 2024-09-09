/**
 * Task description:
 * Given an integer array 'nums' sorted in non-decreasing order, remove some duplicates "in-place" such that each unique element appears at most twice. 
 * The relative order of the elements should be kept the same.  Since it is impossible to change the length of the array in some languages, 
 * you must instead have the result be placed in the first part of the array 'nums'. More formally, if there are 'k' elements after removing the duplicates, 
 * then the first 'k' elements of 'nums' should hold the final result. It does not matter what you leave beyond the first 'k' elements.  
 * Return 'k' after placing the final result in the first 'k' slots of 'nums'.  
 * 
 * Do not allocate extra space for another array. You must do this by modifying the input array "in-place" with O(1) EXTRA memory!
 * 
 * Constraints:
 * 1 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
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
    // N.B.: check "two-pointer technique" for performance improvements! 
    // Current realisation has performance issues on big arrays (up to 30k items)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] == nums[i] && nums[i + 1] == nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
};

// example 1
let some_array_1 = [1, 1, 1, 2, 2, 3];
removeDuplicates(some_array_1);
console.log(some_array_1);

// example 2
let some_array_2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(some_array_2);
console.log(some_array_2);