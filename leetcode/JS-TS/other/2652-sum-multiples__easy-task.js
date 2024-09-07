/**
 * Task description:
 * Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7. 
 * 
 * Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
 * 
 * Constraints:
 * 1 <= n <= 10^3
*/

/**
 * Solution:
 */

/**
 * Returns sum of multiples for given number
 * @param {number} n - range end number (range - [1, n]).
 * @return {number} - sum if Multiples.
 */
const sumOfMultiples = function(n) {
    // init result sum value
    let sum = 0;

    // local helper function
    let isDivisibleBy3_5_7 = (number) => { return (number % 3 == 0 || number % 5 == 0 || number % 7 == 0) }

    for (let i = 1; i <= n; i++) {
        if (isDivisibleBy3_5_7(i)) {
            sum += i;
        }
    }

    // return ready sum
    return sum;
};

console.log(sumOfMultiples(7));
console.log(sumOfMultiples(9));
console.log(sumOfMultiples(10));