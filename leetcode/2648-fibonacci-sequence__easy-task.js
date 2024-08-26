/**
 * Task description:
 * Write a generator function that returns a generator object which yields the fibonacci sequence. 
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2. The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13
 * 
 * Constraints:
 * 0 <= callCount <= 50
*/

/**
 * Solution:
 */

/**
 * 
 * @returns {Function}
 */
const fibGenerator = function () {
    let sequence = [];

    return {
        /**
         * 
         * @returns {object}
         */
        next(){
            //two flows - put first two items | calc other next values of sequence
            sequence.push(sequence.length < 2 ? (sequence.length == 0 ? 0 : 1) : (sequence[sequence.length - 2] + sequence[sequence.length - 1]));

            return {
                // 
                value: sequence[sequence.length - 1],
            }
        },
    };
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
console.log(gen.next().value); // 13
console.log(gen.next().value); // 21
console.log(gen.next().value); // 34