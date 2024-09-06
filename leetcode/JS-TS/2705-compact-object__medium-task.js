/**
 * Task description: 
 * Given an object or array obj, return a compact object.  
 * A compact object is the same as the original object, except with keys containing falsy values removed. 
 * This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. 
 * A value is considered falsy when Boolean(value) returns false.  
 * You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 * 
 *  * Constraints: 
 * -> obj is a valid JSON object
 * -> 2 <= JSON.stringify(obj).length <= 10^5
*/
 
/**
 * Solution:
*/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function(obj) {
    if(typeof obj == 'object') {
        // deconstruct obj pairs to two arrays
        let keys = Object.keys(obj);
        let values = Object.values(obj);

        // detect some imput variation
        let isArrayMode =  Array.isArray(obj);
        let result = isArrayMode ? [] : {};

        // traverse 
        values.forEach((value, i) => {
            // check is value is not "falsy"
            if(value) {
                // check is values is nested object
                value = typeof value == 'object' ? compactObject(value) : value;

                if(isArrayMode) result.push(value);             // is array mode - ignore original keys (avoiding "holes")
                if(!isArrayMode) result[keys[i]] = value;       // is not array mode - recompose
            }
        });

        return result;
    } else return obj;
};



// exmample 1
let some_object_1 = [null, 0, false, 1];
let compacted_1 = compactObject(some_object_1);
console.log(compacted_1); // [1]

// example 2
let some_object_2 =  {"a": null, "b": [false, 1, 'a'],  "c": 3}; // "c": 3, "d": false, "f": true
let compacted_2 = compactObject(some_object_2);
console.log(compacted_2); // {"b": [1]}

// exmpale 3 
let some_object_3 = [null, 0, 5, [0], [false, 16]];
let compacted_3 = compactObject(some_object_3);
console.log(compacted_3);