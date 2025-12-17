// let arr = [];
// arr.push(100);
// arr.push(false);
// arr.push("rampravesh");
// arr.push(100);

// arr[8] = 34;
// console.log(arr);
// console.log(arr[4]);

// let newArr = new Array(4);
// console.log(newArr);

// let arr = [];
// arr[0] = Number(prompt("enter a number"));
// arr[1] = Number(prompt("enter a number"));
// arr[2] = Number(prompt("enter a number"));
// arr[3] = Number(prompt("enter a number"));
// arr[4] = Number(prompt("enter a number"));
// console.log(arr);

// let arr = new Array(5);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("enter a number"));
// }
// console.log(arr);

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// let arr = [24, 5, 3, 236, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let arr = [53, 2, 5, 242, 54, 64, 64, 242, 2];
// let max = Number.MIN_SAFE_INTEGER;
// let secMax = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < arr.length; i++) {
//   console.log("===============\n");
//   if (arr[i] > max) {
//     console.log(i);
//     secMax = max;
//     max = arr[i];
//     console.log("max:", max);
//     console.log("secmax:", secMax);
//   } else if (arr[i] > secMax && arr[i] < max) {
//     console.log(i);
//     secMax = arr[i];
//     console.log("elseif bala secmax:", secMax);
//   }
// }
// console.log(max);
// console.log(secMax);

// let arr = [53, 2, 5, 242, 54, 64, 64, 242, 2];

// let min = Number.MAX_SAFE_INTEGER;
// let secMin = Number.MAX_SAFE_INTEGER;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     secMin = min;
//     min = arr[i];
//   } else if (arr[i] < secMin) {
//     secMin = arr[i];
//   }
// }
// console.log(min);
// console.log(secMin);

//✅✅✅ reverse the array with extra space

// let arr = [21, 43, 65, 68, 42, 86, 44, 54];

// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   //   temp.push(arr[i]);  // not push new elemene because after push new element in temp size increase
//   temp[j] = arr[i];
//   j++;
// }

// console.log(temp);

//✅✅✅ reverse the array without extra spaces

// let arr = [21, 43, 65, 42, 86, 44, 54];
// // console.log(arr);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i >= j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     //   [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   j++;
// }

// console.log("last ans", arr);

//✅✅✅ TWO POINTER

// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     // console.log(arr)
//     j++;
//   }
// }

// console.log(arr);

let arr = [-2, 32, 34, -46, 3, 5, -342, -3, 64];

let j = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
}

console.log(arr);
