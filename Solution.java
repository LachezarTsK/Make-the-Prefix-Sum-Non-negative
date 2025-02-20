
import java.util.PriorityQueue;

public class Solution {

    public int makePrefSumNonNegative(int[] input) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        int minOperationsToMakePrefixSumNonNegative = 0;
        long prefixSum = 0;

        for (int value : input) {
            prefixSum += value;
            if (value < 0) {
                minHeap.add(value);
            }

            // Checking for non-empty 'minHeap' is not necessary in this case.
            // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
            while (prefixSum < 0) {
                prefixSum -= minHeap.poll();
                ++minOperationsToMakePrefixSumNonNegative;
            }
        }

        return minOperationsToMakePrefixSumNonNegative;
    }
}
