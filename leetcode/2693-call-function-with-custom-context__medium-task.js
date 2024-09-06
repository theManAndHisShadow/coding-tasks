/**
 * Task description:
 * Enhance all functions to have the 'callPolyfill' method. 
 * The method accepts an object 'obj' as it's first parameter and any number of additional arguments. 
 * The 'obj' becomes the this context for the function. The additional arguments are passed to the function 
 * (that the callPolyfill method belongs on).  
 * 
 * For example if you had the function:
 * function tax(price, taxRate) {
 *      const totalCost = price * (1 + taxRate);
 *      console.log(`The cost of ${this.item} is ${totalCost}`);
 * }
 * 
 * Calling this function like 'tax(10, 0.1)' will log "The cost of undefined is 11". 
 * This is because the this context was not defined.  
 * However, calling the function like 'tax.callPolyfill({item: "salad"}, 10, 0.1)' will log "The cost of salad is 11". 
 * The this context was appropriately set, and the function logged an appropriate output.  
 * 
 * Please solve this without using the built-in Function.call method!
 * 
 * Constraints:
 * typeof args[0] == 'object' and args[0] != null
 * 1 <= args.length <= 100
 * 2 <= JSON.stringify(args[0]).length <= 10^5
*/

/**
 * Solution:
 */

/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    let fn = this.bind(context, ...args);

    return fn();
}


/**
 * Better solution (~35 ms)
 * Function.prototype.callPolyfill = function(context, ...args) {
 *   const newFunc = Symbol();   //UID for adding function to context object
 *   context[newFunc] = this;   //Store function inn UID location
 *   const result = context[newFunc](...args); //Get results of function on the context provided
 *   delete context[newFunc];    //Free up space and remove function from context for further usage
 *   return result
 * }
 */

// example 1
function increment() { this.count++; return this.count; }
let result_1 = increment.callPolyfill({count: 1});
console.log(result_1) // 2

// example 2
function add(b) { return this.a + b; }
let result_2 = add.callPolyfill({"a": 5}, 7);
console.log(result_2);

// example 3
function tax(price, taxRate) { return `The cost of the ${this.item} is ${price * taxRate}`; }
let result_3 = tax.callPolyfill({"item": "burger"}, 10, 1.1);
console.log(result_3);