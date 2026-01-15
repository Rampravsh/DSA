// ✅✅✅SORT AN ARRAY CONSISTING OF ONLY 0s AND 1s

// let arr = [1, 0, 1, 0, 0, 1, 1, 0, 1];

// let totalOfZeros = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     totalOfZeros++;
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (i < totalOfZeros) {
//     arr[i] = 0;
//   } else {
//     arr[i] = 1;
//   }
// }

// console.log(arr);
// Method 1: Sort by Counting
// Time Complexity: O(n)
// Space Complexity: O(1)

// ✅✅✅WITH TWO POINTER METHOD

// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//   if (arr[left] == 1 && arr[right] == 0) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   if (arr[left] == 0) {
//     left++;
//   }
//   if (arr[right] == 1) {
//     right--;
//   }
// }

// console.log(arr);

// Method 2: WITH TWO POINTER METHOD
// Time Complexity: O(n)
// Space Complexity: O(1)

//✅✅✅ ye third method hai jo ki two pointer pe hi base hai per hum isme
//suru se hi dono pointer ko treverse krange

// let arr = [1, 0, 1, 0, 0, 1, 1, 0, 1];

// function sortWithTwoPointer(arr) {
//   let i = 0;
//   let j = 0;
//   while (i < arr.length) {
//     if (arr[i] == 0 && arr[j] == 1) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j++;
//     }
//     if (arr[i] == 1) {
//       i++;
//     }
//     if (arr[j] == 0) {
//       j++;
//     }
//   }
//   return arr;
// }

// console.log(sortWithTwoPointer(arr));

//❓❓❓ Given an arry if integers 'a', move all the even integers at the
// beginning of the array followed by all the odd integeres. The
// relative order of odd or even integers does not matter .Return
// any array that satisfies the condition.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sortArrayByParity(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] % 2 == 1 && arr[right] % 2 == 0) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//     if (arr[left] % 2 == 0) {
//       left++;
//     }
//     if (arr[right] % 2 == 1) {
//       right--;
//     }
//   }
//   return arr;
// }

// console.log(sortArrayByParity(arr));

//✅✅✅let do something crazy with order ko mentain rakte hue ise karte hai
//isko karne ke lia hume extra space ki jaroot padega taki hum order ko mentain kar sake

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sortArrayByParity(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let res = new Array(arr.length);
//   for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//     if (arr[i] % 2 == 0) {
//       res[left] = arr[i];
//       left++;
//     }
//     if (arr[j] % 2 == 1) {
//       res[right] = arr[j];
//       right--;
//     }
//   }
//   return res;
// }

// console.log(sortArrayByParity(arr));

//❓❓❓Given an interger array'a' sorted in non - decreasing order ,return an array of the
//squares of each number sorted in non-decreasing order

let arr = [-10, -3, -2, 1, 4, 5];

function sqOfArrayElement(arr) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let ans = new Array(n);
  let k = n - 1;
  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      ans[k--] = arr[left] * arr[left];
      left++;
    } else {
      ans[k--] = arr[right] * arr[right];
      right--;
    }
  }
  return ans;
}

console.log(sqOfArrayElement(arr));
