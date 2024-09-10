/**
 * Regular solution.
 * Not efficient, but simpler to understand.
 */
function removeDuplicatesSplice(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] === nums[i] && nums[i + 1] === nums[i]) {
            nums.splice(i, 1);
            i--; // decreasing 'i' each time wheu 'splices' is used
        }
    }
}
/**
 * Removes duplicates from a sorted array in-place,
 * allowing each element to appear at most twice.
 * The function adjusts the array length to the number
 * of unique elements allowed.
 */
function removeDuplicatesTwoPointers(nums) {
    // Step 1: Initialize index `k` to track the position for unique elements.
    // We start at 2 because the first two elements are always kept.
    let k = 2;
    // Step 2: Iterate through the array starting from the third element.
    for (let i = 2; i < nums.length; i++) {
        // Step 3: Check if the current element `nums[i]` is different 
        // from the element two positions before `k`.
        // This ensures that the current element is not a duplicate
        // beyond the allowed count of two.
        if (nums[i] !== nums[k - 2]) {
            // Step 4: If the current element is unique, 
            // place it at index `k` and increment `k`.
            nums[k] = nums[i];
            k++;
        }
    }
    // Step 5: Adjust the length of the array to reflect the number of 
    // unique elements that are allowed (i.e., the value of `k`).
    nums.length = k;
}
function benchmark() {
    // Generate an array of 10,000 elements with duplicates
    const nums = Array.from({ length: 10000 }, (_, i) => Math.floor(i / 100));
    const numsCopy1 = [...nums]; // copy of array for 'removeDuplicatesSplice' method
    const numsCopy2 = [...nums]; // copy of array for 'removeDuplicatesTwoPointers' method
    // Testing the 'removeDuplicatesSplice' method
    console.time("Splice method");
    removeDuplicatesSplice(numsCopy1);
    console.timeEnd("Splice method");
    //  Testing the 'removeDuplicatesTwoPointers' method
    console.time("Two Pointers method");
    removeDuplicatesTwoPointers(numsCopy2);
    console.timeEnd("Two Pointers method");
}
benchmark();
// // some testing
// // example 1
// let some_test_array_1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// let some_test_array_2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// removeDuplicatesSplice(some_test_array_1);
// removeDuplicatesTwoPointers(some_test_array_2);
// console.log('expecting', [0, 0, 1, 1, 2, 3, 3 ]);
// console.log(some_test_array_1); // expecting [0, 0, 1, 1, 2, 3, 3 ]
// console.log(some_test_array_2);
