//✅✅✅Problem based on prefix sum approach

//❓❓❓Given an integer array 'a' , return the prefix sum/running sum in
// the same array without creating a new array

let arr = [2, 3, 4, 2, 5, 1, 19];
function prefixSum() {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
}

console.log(prefixSum(arr));
