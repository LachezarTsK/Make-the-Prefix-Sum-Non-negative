
// const {PriorityQueue} = require('@datastructures-js/priority-queue');
/*
 PriorityQueue is included internally in the solution file on leetcode.
 When running the code on leetcode it should stay outcommented. 
 It is mentioned just for information about which external library is applied for this data structure.
 */

/**
 * @param {number[]} input
 * @return {number}
 */
var makePrefSumNonNegative = function (input) {
    const minHeap = new PriorityQueue((x, y) => x - y);
    let minOperationsToMakePrefixSumNonNegative = 0;
    let prefixSum = 0;

    for (let value of input) {
        prefixSum += value;
        if (value < 0) {
            minHeap.enqueue(value);
        }

        // Checking for non-empty 'minHeap' is not necessary in this case.
        // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
        while (prefixSum < 0) {
            prefixSum -= minHeap.dequeue();
            ++minOperationsToMakePrefixSumNonNegative;
        }
    }

    return minOperationsToMakePrefixSumNonNegative;
};
