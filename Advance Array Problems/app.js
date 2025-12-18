//✅✅✅ left rotation by 1 element
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let temp = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr)

//✅✅✅ right rotation by 1 element
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);

//✅✅✅ left and right rotation by k element
//✅✅✅ left rotation by k element

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;
// for (let j = 0; j < k; j++) {
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
// }

// console.log(arr);

//✅✅✅ right rotation by k element

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;
// for (let i = 0; i < k; i++) {
//   temp = arr[arr.length - 1];
//   for (let j = arr.length - 1; j > 0; j--) {
//     arr[j] = arr[j - 1];
//   }
//   arr[0] = temp;
// }
// console.log(arr);
