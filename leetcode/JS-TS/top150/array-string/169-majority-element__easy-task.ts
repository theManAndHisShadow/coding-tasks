/**
 * Task description:
 * Given an array nums of size n, return the majority element.  
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9

*/

/**
 * Solution:
 */

// dict method
function majorityElement_slow(nums: number[]): number {
    let dict: { [key: string]: number } = {};

    // write to 'hash' table
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1;
    }

    // find max
    let maxNum: string;
    let maxCount: number = 0;
    for (let [num, count] of Object.entries(dict)) {
        if (count > maxCount) {
            maxCount = count;
            maxNum = num;
        };
    }

    return Number(maxNum);
};


// Boyer Moore Algorithm
function majorityElement_fast(nums: number[]): number {
    let guess: number = 0;
    let candidate: number = null;

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if(guess == 0) candidate = num;
        guess += (num === candidate) ? 1 : -1;
    }

    return candidate;
};


/**
 * 
 * @param nums - array to find max value
 * @param useSlow - which method to use 'fast' OR 'slow' (optional param, by default - fast)
 * @returns - max value of target nums array.
 */
function majorityElement(nums: number[], useSlow:boolean = false): number {
    return useSlow === true ? majorityElement_slow(nums) : majorityElement_fast(nums);
};


// example 1
let majority_1 = majorityElement([3, 2, 3]);
console.log(majority_1);

// example 2
let majority_2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(majority_2);