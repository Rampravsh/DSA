//✅✅✅Problem based on prefix sum approach

//❓❓❓Given an integer array 'a' , return the prefix sum/running sum in
// the same array without creating a new array

// let arr = [2, 3, 4, 2, 5, 1, 19];
// function prefixSum() {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     arr[i] = arr[i] + arr[i - 1];
//   }
//   return arr;
// }

// console.log(prefixSum(arr));

//❓❓❓ Given an array of integers of size n. Answer q queries where you need to print the sum
//  of values in a given range of indices from 1 to r (both included).
// 📝📝📝 The values of 1 and r in queries follow 1-based indexing.
/* let arr = [2, 3, 4, 2, 5, 1, 19];

function prefixSum(arr) {
  let n = arr.length;
  let res = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    res[i + 1] = res[i] + arr[i];
  }
  return res;
}

let prefixSumArr = prefixSum(arr);
console.log(prefixSumArr);

function sumValueOf(l, r, arr = prefixSumArr) {
  return arr[r] - arr[l - 1];
}

console.log(sumValueOf(2, 4)); */

//class ke help se ise solve karte hai

class rangeSum {
  constructor(arr) {
    this.prefixSum = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + arr[i];
    }
  }
  getSum(l, r) {
    console.log(this.prefixSum[r] - this.prefixSum[l - 1]);
  }
}

let arr = [2, 3, 4, 2, 5, 1, 19];

const sum = new rangeSum(arr);

sum.getSum(1, 2);
