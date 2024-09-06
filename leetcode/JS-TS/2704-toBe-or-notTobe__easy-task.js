/**
 * Task description: 
 * Write a function expect that helps developers test their code. 
 * It should take in any value val and return an object with the following two functions:
 * - toBe(val) accepts another value and returns true if the two values === each other. 
 *   If they are not equal, it should throw an error "Not Equal". 
 * - notToBe(val) accepts another value and returns true if the two values !== each other. 
 *   If they are equal, it should throw an error "Equal".
*/

/**
 * Solution:
 */

/**
 * Expects a value and returns methods to test whether the expectations are true.
 * @param {any} val - value to check
 * @return {Object} 
 */
const expect = function(expectValue) {
    return {
        /**
         * Checks if 'expectValue' equals to 'testValue'
         * @param {any} testValue 
         */
        toBe(testValue){
            if(expectValue === testValue) {
                return true;
            }
            
            throw new Error("Not Equal");
        },

        /**
         * Checks if 'expectValue' not equals to 'testValue'
         * @param {any} testValue 
         */
        notToBe(testValue){
            if(expectValue !== testValue) {
                return true;
            }
            
            throw new Error("Equal");
        },
    }
};


let check_1 = expect(5).toBe(5);
console.log(check_1);               // true

let check_2 = expect(5).notToBe(5);
console.log(check_2)                // throws "Equal" error

let check_3 = expect(5).toBe(null);
console.log(check_3);               // throws "Not Equal" error