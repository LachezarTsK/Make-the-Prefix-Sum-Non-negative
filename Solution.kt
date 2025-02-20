
import java.util.PriorityQueue

class Solution {

    fun makePrefSumNonNegative(input: IntArray): Int {
        val minHeap = PriorityQueue<Int>()
        var minOperationsToMakePrefixSumNonNegative = 0
        var prefixSum: Long = 0

        for (value in input) {
            prefixSum += value
            if (value < 0) {
                minHeap.add(value)
            }

            // Checking for non-empty 'minHeap' is not necessary in this case.
            // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
            while (prefixSum < 0) {
                prefixSum -= minHeap.poll()
                ++minOperationsToMakePrefixSumNonNegative
            }
        }

        return minOperationsToMakePrefixSumNonNegative
    }
}
