# Prefix Sum Technique Explained

The **prefix sum** (or running sum) is a powerful technique used to efficiently process queries on array data. It involves creating a new array where each element `prefixSum[i]` is the sum of all elements from the original array `arr` up to index `i`.

- **Original Array:** `[a, b, c, d]`
- **Prefix Sum Array:** `[a, a+b, a+b+c, a+b+c+d]`

This pre-computation allows us to answer range sum queries (i.e., the sum of elements from index `L` to `R`) in constant time, which is a significant improvement over iterating through the array for each query.

This file contains JavaScript solutions to several common problems that can be optimized using the prefix sum technique.

---

## 1. In-place Prefix Sum

**Problem:** Given an integer array, modify it to become a prefix sum array without creating a new one.

```javascript
function inPlacePrefixSum(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
}

// Example:
// let arr = [2, 3, 4, 2, 5, 1, 19];
// console.log(inPlacePrefixSum(arr));
// Output: [2, 5, 9, 11, 16, 17, 36]
```

### Complexity Analysis:

- **Time Complexity: `O(n)`**
  - We iterate through the array once to calculate the prefix sum.
- **Space Complexity: `O(1)`**
  - The array is modified in-place, so no extra space proportional to the input size is used.

---

## 2. Range Sum Queries

**Problem:** Given an array, efficiently answer multiple queries for the sum of elements in a given range (from index `l` to `r`).

This is a classic use case for prefix sum. We first compute the prefix sum array. The sum of elements from `l` to `r` can then be calculated as `prefixSum[r] - prefixSum[l-1]`.

```javascript
function createPrefixSumArray(arr) {
  let prefixSum = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }
  return prefixSum;
}

function getRangeSum(prefixSumArr, l, r) {
  // Adjust for 1-based indexing if the problem requires it.
  // This example assumes l and r are 0-based.
  return prefixSumArr[r + 1] - prefixSumArr[l];
}

// Example:
// let arr = [2, 3, 4, 2, 5, 1, 19];
// let prefixSumArr = createPrefixSumArray(arr); // [0, 2, 5, 9, 11, 16, 17, 36]
// console.log(getRangeSum(prefixSumArr, 1, 3)); // Sum from index 1 to 3 (3+4+2)
// Output: 9
```

### Complexity Analysis:

- **Pre-computation (createPrefixSumArray):**
  - Time: `O(n)` - To build the prefix sum array.
  - Space: `O(n)` - To store the prefix sum array.
- **Query (getRangeSum):**
  - Time: `O(1)` - Each query is a simple subtraction.
  - Space: `O(1)` - No extra space is needed per query.

---

## 3. Equal Partition of Subarrays

**Problem:** Check if an array can be partitioned into two contiguous subarrays with an equal sum.

### Method 1: Using Prefix and Suffix Sum Arrays

This method involves building both a prefix sum array (sum from the start) and a suffix sum array (sum from the end) and finding an index `i` where `prefixSum[i] === suffixSum[i+1]`.

```javascript
function canPartition_PrefixSuffix(arr) {
  let n = arr.length;
  let prefixSum = new Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  let suffixSum = new Array(n).fill(0);
  suffixSum[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + arr[i];
  }

  for (let i = 0; i < n - 1; i++) {
    if (prefixSum[i] === suffixSum[i + 1]) {
      return true;
    }
  }
  return false;
}
// Example:
// let arr = [5, 3, 2, 6, 3, 1]; // Partition is [5,3,2] (10) and [6,3,1] (10)
// console.log(canPartition_PrefixSuffix(arr));
// Output: true
```

### Complexity Analysis:

- **Time Complexity: `O(n)`**
  - We have three separate loops, each running `n` times. `O(n + n + n)` simplifies to `O(n)`.
- **Space Complexity: `O(n)`**
  - We use two additional arrays (`prefixSum` and `suffixSum`), each of size `n`.

### Method 2: Optimized Approach with Total Sum

A more optimized approach is to first find the total sum of the array. Then, iterate through the array, calculating the prefix sum at each point. If at any index `i`, the `prefixSum[i]` is equal to `totalSum - prefixSum[i]`, we have found an equal partition.

```javascript
function canPartition_Optimized(arr) {
  let totalSum = 0;
  for (let x of arr) {
    totalSum += x;
  }

  let prefixSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    prefixSum += arr[i];
    if (prefixSum === totalSum - prefixSum) {
      return true;
    }
  }
  return false;
}
// Example:
// let arr = [5, 3, 2, 6, 3, 1];
// console.log(canPartition_Optimized(arr));
// Output: true
```

### Complexity Analysis:

- **Time Complexity: `O(n)`**
  - We iterate through the array twice in total (once for the total sum, once for the prefix sum check).
- **Space Complexity: `O(1)`**
  - Only a few variables are used to store `totalSum` and `prefixSum`, regardless of the input array size.
