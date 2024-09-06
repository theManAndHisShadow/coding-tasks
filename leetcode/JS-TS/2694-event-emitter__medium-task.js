/**
 * Task description:
 * Design an EventEmitter class.
 * This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. 
 * The EventEmitter should allow for subscribing to events and emitting them. 
 * 
 *  Your EventEmitter class should have the following two methods:  
 * - 'subscribe' - This method takes in two arguments: the name of an event as a string and a callback function. 
 *   This callback function will later be called when the event is emitted. An event should be able to have multiple listeners for the same event. 
 *   When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. 
 *   An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical. 
 *   The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. 
 *   When it is called, the callback should be removed from the list of subscriptions and undefined should be returned. 
 * 
 * - 'emit' - This method takes in two arguments: the name of an event as a string and an optional array of arguments that 
 *   will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. 
 *   Otherwise, return an array of the results of all callback calls in the order they were subscribed.  
 * 
 * Constraints: 
 * -> 1 <= actions.length <= 10 
 * -> values.length === actions.length 
 * -> All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing from a non-existing subscription. 
 * -> There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe. 
 * -> The EventEmitter action doesn't take any arguments. 
 * -> The emit action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, 
 *    and the 2nd argument is passed to the callback functions. 
 * -> The subscribe action takes 2 arguments, where the first one is the event name and the second is the callback function. 
 * -> The unsubscribe action takes one argument, which is the 0-indexed order of the subscription made before.
*/

/**
 * Solution:
 */

class EventEmitter {
    constructor(){
        this.listeners = {};
    }

    /**
     * Subscribes to event
     * @param {string} eventName - target event
     * @param {Function} callback - action on triggers
     * @return {{unsubscribe: Function}} 
     */
    subscribe(eventName, callback) {
        let lastIndex = false;

        if(!this.listeners[eventName]) {
            this.listeners[eventName] = [callback];
            lastIndex = 0;
        } else {
            lastIndex = this.listeners[eventName].push(callback) - 1;
        }

        /**
         * Unsubscribes from event.
         */
        return {
            unsubscribe: () => {
                // remove callback using index
                this.listeners[eventName].splice(lastIndex, 1);
            }
        };
    }

    /**
     * Trigggers event, passing custom arguments into cb function
     * @param {string} eventName - event name
     * @param {Array} args - arguments of cb functions
     * @return {Array} - result of callback function
     */
    emit(eventName, args = []) {
        // chec is callbacks already existing - if true - call each cb and return thei results as array OR return empty array
        return Array.isArray(this.listeners[eventName]) ? this.listeners[eventName].map(callback => {return callback.apply(this, args); }) : [];
    }
}


// --- Example 1 ----------------------------------------------------------------------------------------
const emitter_1 = new EventEmitter();
let result_1 = emitter_1.emit("firstEvent");                 // [], no callback are subscribed yet

// some actions
emitter_1.subscribe("firstEvent", function cb1() { return 5; });
emitter_1.subscribe("firstEvent", function cb2() { return 6; });

let result_2 = emitter_1.emit("firstEvent");                 // [5, 6], returns the output of cb1 and cb2
console.log(result_1, result_2, emitter_1);


// --- Example 2 ----------------------------------------------------------------------------------------
const emitter_2 = new EventEmitter();
const subscription_2_1 = emitter_2.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
let result_3 = emitter_2.emit("firstEvent", [1, 2, 3]);     // ["1,2,3"]
let result_4 = emitter_2.emit("firstEvent", [3, 4, 6]);     // ["3,4,6"]
console.log(result_3, result_4, emitter_2);


// --- Example 2 ----------------------------------------------------------------------------------------
const emitter_3 = new EventEmitter();
const subscription_3_1 = emitter_3.subscribe("firstEvent", (...args) => args.join(','));
let result_5 = emitter_3.emit("firstEvent", [1, 2, 3]);     // ["1,2,3"]
subscription_3_1.unsubscribe();                             // undefined
let result_6 = emitter_3.emit("firstEvent", [4, 5, 6]);     // [], there are no subscriptions
console.log(result_5, result_6, emitter_3);


// --- The End ------------------------------------------------------------------------------------------