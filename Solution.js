
/**
 * @param {number[]} input
 * @return {number}
 */
var makePrefSumNonNegative = function (input) {
    // const {PriorityQueue} = require('@datastructures-js/priority-queue');
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
