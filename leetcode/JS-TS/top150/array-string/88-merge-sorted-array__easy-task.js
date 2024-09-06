/**
 * Task description:
 * You are given two integer arrays 'nums1' and 'nums2', sorted in non-decreasing order, 
 * and two integers 'm' and 'n', representing the number of elements in 'nums1' and 'nums2' respectively.  
 * 
 * Merge 'nums1' and 'nums2' into a single array sorted in non-decreasing order.  
 * The final sorted array should not be returned by the function, but instead be stored inside the array 'nums1'. 
 * To accommodate this, 'nums1' has a length of 'm' + 'n', 
 * where the first 'm' elements denote the elements that should be merged, and the last 'n' elements 
 * are set to 0 and should be ignored. 'nums2' has a length of n.
 * 
 * Constraints:
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
*/

/**
 * Solution:
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2.splice(0, n));
    nums1.sort((a, b) => a - b)
};

const example_1_obj = {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,

    nums2: [2, 5, 6],
    n: 3
};

let result_1 = merge(example_1_obj.nums1, example_1_obj.m, example_1_obj.nums2, example_1_obj.n);
console.log(example_1_obj.nums1);