/**
 * Task description: 
 * Given two arrays arr1 and arr2, return a new array joinedArray. 
 * All the objects in each of the two inputs arrays will contain an id field that has an integer value.
 * 'joinedArray' is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. 
 * The returned array should be sorted in ascending order based on the id key.  
 * If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.  
 * If two objects share an id, their properties should be merged into a single object:  If a key only exists in one object, 
 * that single key-value pair should be included in the object. If a key is included in both objects, 
 * the value in the object from arr2 should override the value from arr1.
 *
 * Constraints: 
 * -> arr1 and arr2 are valid JSON arrays
 * -> Each object in arr1 and arr2 has a unique integer id key
 * -> 2 <= JSON.stringify(arr1).length <= 10^6
 * -> 2 <= JSON.stringify(arr2).length <= 10^6
*/

/**
 * Solution: 
 */ 


/**
 * Joins two arrays of objects to joined array, merging objects by ID.
 * Uses own realisation. Average execute time - ~480 (in leetcode test cases with big data)
 * @param {object[]} arr1 
 * @param {object[]} arr2 
 * @returns {object[]} - merged array of objets
 */
const slowJoin = function(arr1, arr2) {
    // init result map-like object
    const merged = {
        IDs: [],
        items: [],
        hashTable: {},
    };

    /**
     * Local helper function, sorts object keys by ascending
     * @param {object} object - target array to sort
     * @returns {object} - array with sorted keys
     */
    const sortKeys = (object) => {
        let pairs = Object.entries(object);
        let sortedPairs = pairs.sort((a, b) => a[0].localeCompare(b[0]));
        let recomposed = Object.fromEntries(sortedPairs);

        return recomposed;
    }

    /**
     * Sorts object[] by id
     * @param {object[]} arrayOfObjects - target array to sort by ID
     * @returns {object[]} - sorted array of objects
     */
    const sortByID = (arrayOfObjects) => {
        return arrayOfObjects.sort((a, b) => a.id - b.id);
    }

    /**
     * Push new item if its has new ID or merge with exiting elem (with same ID)
     * @param {object} element - new array's object element
     * @param {object[]} destination - array of objects
     */
    const pushOrMerge = (element, destination) => {
        let ID = element.id;                             // set current id
        let index = destination.hashTable[ID]                // index of ID

        // if it is new elem - just push OR merge with existing object
        if(index == undefined) {
            destination.IDs.push(ID);                                                           // add ID
            destination.items.push(sortKeys(element))                                           // push item
            destination.hashTable[ID] = destination.items.length - 1;                           // add to hash table
        } else {
            destination.items[index] = Object.assign(destination.items[index], element);        // update item if id duplicate
        }
    }

    // process all items of arr1
    arr1.forEach(element => { pushOrMerge(element, merged) });

    // process all items of arr2
    arr2.forEach(element => { pushOrMerge(element, merged) });


    // returns sorted by id merged array of objects
    return sortByID(merged.items);
};



/**
 * Joins two arrays of objects to joined array, merging objects by ID.
 * Uses 'Map' in realisation. Average execute time - ~390 (in leetcode test cases with big data)
 * @param {object[]} arr1 
 * @param {object[]} arr2 
 * @returns {object[]} - merged array of objets
 */
const fastJoin = (arr1, arr2) => {
    let merged = new Map();

    // process all items of arr1
    arr1.forEach(objectElement => merged.set(objectElement.id, Object.assign((merged.get(objectElement.id) || {}), objectElement)));

    // process all items of arr2
    arr2.forEach(objectElement => merged.set(objectElement.id, Object.assign((merged.get(objectElement.id) || {}), objectElement)));

    const result = Array.from(merged.values()).sort((a, b) => a.id - b.id);

    return result;
}



/**
 * Joins two arrays of objects to joined array, merging objects by ID.
 * @param {object[]} arr1 
 * @param {object[]} arr2 
 * @param {boolean} slowJoin - optional param, choose method to join
 * @returns {object[]} - merged array of objets
 */
const join = (arr1, arr2, slowJoin = false) => {
    return slowJoin === true ? slowJoin(arr1, arr2) : fastJoin(arr1, arr2)
};

/**
 * Best solution (~250 ms)
 * let join = (arr1, arr2) => {
 *   let a = []
 *   arr1.forEach(x => a[x.id] = x)
 *   arr2.forEach(x => {
 *       if (a[x.id]) Object.assign(a[x.id], x)
 *       else a[x.id] = x
 *   })
 *   return Object.values(a)
 * }
*/


// example 1
let some_array_1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];

let some_array_2 = [
    {"id": 3, "x": 5}
];

// let merged_1 = join(some_array_1, some_array_2);
// console.log(merged_1); // [{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }, { "id": 3, "x": 5 }]



// example 2
let some_array_3 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];

let some_array_4 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
];


// let merged_2 = join(some_array_3, some_array_4);
// console.log(merged_2); // [{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }]



// example 3
let some_array_5 = [
    { 
        "id": 1, 
        "b": { "b": 94 }, 
        "v": [4, 3], 
        "y": 48 
    }
];

let some_array_6 = [
    { 
        "id": 1, 
        "b": { "c": 84 }, 
        "v": [1, 3] 
    }
];

let merged_3 = join(some_array_5, some_array_6);
// console.log(merged_3); // [ { id: 1, b: { c: 84 }, v: [ 1, 3 ], y: 48 } ]



// example 4
let some_array_7 = [
    {"id":1,"x":36,"d":26,"f":35},
    {"id":3,"c":20,"z":75}
];

let some_array_8 = [
    {"id":2,"o":48,"z":84,"y":61}
];

let merged_4 = join(some_array_7, some_array_8);
console.log(merged_4); // [{"d":26,"f":35,"id":1,"x":36},{"id":2,"o":48,"y":61,"z":84},{"c":20,"id":3,"z":75}]