// print the sub arrays of an array

let arr = [4, 3, 7, 2];
let n = arr.length;
n = (n * (n + 1)) / 2;
let k = 0;
let subArray = new Array(n);
for (let i = 0; i < arr.length; i++) {
  subArray[k++] = [arr[i]];
  if (arr[i + 1]) {
    subArray[k++] = [arr[i], arr[i + 1]];
  }
  if (arr[i + 2]) {
    subArray[k++] = [arr[i], arr[i + 1], arr[i + 2]];
  }
  if (arr[i + 3]) {
    subArray[k++] = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]];
  }
}
console.log(subArray);
