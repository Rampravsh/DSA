// SORT AN ARRAY CONSISTING OF ONLY 0s AND 1s

let arr = [1, 0, 1, 0, 0, 1, 1, 0, 1];

let left = 0;
let right = arr.length - 1;
while (left < right) {
  if (arr[left] == 1 && arr[right] == 0) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  if (arr[left] == 0) {
    left++;
  }
  if (arr[right] == 1) {
    right--;
  }
}

console.log(arr);
