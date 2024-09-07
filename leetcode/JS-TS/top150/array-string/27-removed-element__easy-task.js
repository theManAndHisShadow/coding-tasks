/**
 * Task description:
 * Given an integer array 'nums' and an integer 'val', remove all occurrences of 'val' in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to 'val'.  
 * Consider the number of elements in nums which are not equal to 'val' be 'k', to get accepted, you need to do the following things:  
 * -> Change the array nums such that the first 'k' elements of nums contain the elements which are not equal to 'val'. 
 *    The remaining elements of nums are not important as well as the size of nums. 
 * -> Return 'k'.
 * 
 * Constraints:
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
*/

/**
 * Solution:
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }

    // Note
    // Better do not use '.splice', instead use this construction for better performance
    /**
     * let k = 0;
     * for (let i = 0; i < nums.length; i++) {
     *      if (nums[i] !== val) {
     *          nums[k] = nums[i];
     *           k++;
     *      }
     * }
     */

    return nums.length;
};

// example 1 
let some_array_1 = [3, 2, 2, 3];
let k_1 = removeElement(some_array_1, 3);
console.log(k_1, some_array_1);

// example 2
let some_array_2 = [0, 1, 2, 2, 3, 0, 4, 2];
let k_2 = removeElement(some_array_2, 2);
console.log(k_2, some_array_2);