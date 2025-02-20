
using System;
using System.Collections.Generic;

public class Solution
{
    public int MakePrefSumNonNegative(int[] input)
    {
        PriorityQueue<int, int> minHeap = new PriorityQueue<int, int>();
        int minOperationsToMakePrefixSumNonNegative = 0;
        long prefixSum = 0;

        foreach (int value in input)
        {
            prefixSum += value;
            if (value < 0)
            {
                minHeap.Enqueue(value, value);
            }

            // Checking for non-empty 'minHeap' is not necessary in this case.
            // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
            while (prefixSum < 0)
            {
                prefixSum -= minHeap.Dequeue();
                ++minOperationsToMakePrefixSumNonNegative;
            }
        }

        return minOperationsToMakePrefixSumNonNegative;
    }
}
