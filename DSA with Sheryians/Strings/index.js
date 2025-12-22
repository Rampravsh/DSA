// let s = "Ramprvesh kumar";
// console.log(s.slice(-1));
// console.log(s.toLocaleLowerCase())
// console.log(s.toUpperCase())

// Q. print each character on new line

// for (let i=0;i<s.length;i++){
//     console.log(s[i])
// }

//Q. print in reverse order

// for (let i = s.length - 1; i >= 0; i--) {
//   console.log(s[i]);
// }

// Q. check if string is palindrome or not
// let s = "abcba";
// let newS = "";
// for (let i = s.length - 1; i >= 0; i--) {
//   newS += s[i];
// }
// console.log(s);
// console.log(newS);
// if (s === newS) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Q.check if string is plidrome or not without extra space and with two pointer
// let s = "kdsfjlakj";
// for (let i = 0, j = s.length - 1; i < j; i++, j--) {
//   if (s[i] !== s[j]) {
//     console.log(false);
//     break;
//   }
//   if (i + 1 === j || i === j) {
//     console.log(true);
//   }
// }

// Q. score of string

// var scoreOfString = function (s) {
//   let sum = 0;
//   for (let i = 0; i < s.length-1; i++) {
//     console.log(s.charCodeAt(i));
//     sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
//     console.log(sum);
//   }
//   return sum;
// };
// console.log(scoreOfString('hello'));

// Q.toggle each character
// let s = "Rampravesh Kumar";
// let toggle = "";
// for (let i = 0; i < s.length; i++) {
//   let ch = s.charCodeAt(i);
//   if (ch >= 65 && ch <= 90) {
//     toggle = toggle + String.fromCharCode(ch + 32);
//   } else if (ch >= 97 && ch <= 122) {
//     toggle = toggle + String.fromCharCode(ch - 32);
//   } else {
//     toggle += s[i];
//   }
// }

// console.log(toggle);

// Q.frequency of each character

let s = "Rampravesh Kumar";
let res = {};
let arr = new Array(128).fill(0);
for (let i = 0; i < s.length; i++) {
  let indx = s.charCodeAt(i);
  arr[indx] = arr[indx] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    res = { ...res, [String.fromCharCode(i)]: arr[i] };
  }
}
console.log(res);
