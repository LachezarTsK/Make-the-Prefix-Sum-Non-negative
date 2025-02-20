
package main

import "container/heap"

func makePrefSumNonNegative(input []int) int {
    minHeap := make(PriorityQueue, 0)
    minOperationsToMakePrefixSumNonNegative := 0
    var prefixSum int64

    for _, value := range input {
        prefixSum += int64(value)
        if value < 0 {
            heap.Push(&minHeap, value)
        }

        // Checking for non-empty 'minHeap' is not necessary in this case.
        // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
        for prefixSum < 0 {
            prefixSum -= int64(heap.Pop(&minHeap).(int))
            minOperationsToMakePrefixSumNonNegative++
        }
    }

    return minOperationsToMakePrefixSumNonNegative
}

type PriorityQueue []int

func (pq PriorityQueue) Len() int {
    return len(pq)
}

func (pq PriorityQueue) Less(first int, second int) bool {
    return pq[first] < pq[second]
}

func (pq PriorityQueue) Swap(first int, second int) {
    pq[first], pq[second] = pq[second], pq[first]
}

func (pq *PriorityQueue) Push(object any) {
    *pq = append(*pq, object.(int))
}

func (pq *PriorityQueue) Pop() any {
    value := (*pq)[pq.Len() - 1]
    *pq = (*pq)[0 : pq.Len() - 1]
    return value
}
