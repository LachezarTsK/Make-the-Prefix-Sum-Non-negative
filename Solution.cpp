
#include <queue>
#include <vector>
using namespace std;

class Solution {

public:
    int makePrefSumNonNegative(const vector<int>& input) const {
        priority_queue<long long, vector<long long>, greater<long long>> minHeap;
        int minOperationsToMakePrefixSumNonNegative = 0;
        long long prefixSum = 0;

        for (const auto& value : input) {
            prefixSum += value;
            if (value < 0) {
                minHeap.push(value);
            }

            // Checking for non-empty 'minHeap' is not necessary in this case.
            // If 'inHeap' is empty, then the loop will stop because 'prefixSum = 0'
            while (prefixSum < 0) {
                prefixSum -= minHeap.top();
                minHeap.pop();
                ++minOperationsToMakePrefixSumNonNegative;
            }
        }

        return minOperationsToMakePrefixSumNonNegative;
    }
};
