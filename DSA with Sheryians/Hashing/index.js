// let set = new Set();
// set.add(19);
// set.add(20);
// set.add(45);
// set.add(45);
// set.add(234);
// set.add(4519);
// set.add(57);
// set.delete(19);
// console.log(set);
// console.log(set.size);
// console.log(set.has(10));
// // set.clear();
// console.log(set);
// for (let a of set) {
//   console.log(a);
// }

// Q. find the unique value in the given array

// let arr = [2,2,43, 43, 5, 45, 45,23,56,3,23, 5, 5, 56, 3];

// let set = new Set();
// for (let i = 0; i < arr.length; i++) {
//   if (set.has(arr[i])) {
//     set.delete(arr[i]);
//   } else set.add(arr[i]);
// }

// console.log(set);

// Q A panagram is a sentence wher every letter of the English alphabet appears at least once .

// Given a string sentence containing only lowercase English latters ,
// return true if sentence is a pangram or false otherwise

// let sentence = "thequickbrownfoxjumpsoverthelazydo";

// const checkIfPangram = function (sentence) {
//   let set = new Set();
//   for (let i = 0; i < sentence.length; i++) {
//     let code = sentence.charCodeAt(i);
//     set.add(code);
//   }
//   //   for (let i = 97; i <= 122; i++) {
//   //     if (!set.has(i)) {
//   //       return false;
//   //     }
//   //   }
//   if (set.size !== 26) {
//     return false;
//   }
//   return true;
// };

// console.log(checkIfPangram(sentence));

// map ke bare me yaha se suru ho raha hai
// map ko aese hi define karte abhi to yahi pta bad me pta chala to update kar dunga

// let map = new Map();

// map.set("name", "rampravesh");
// map.set("age", 19);
// map.set("isPassed", true);
// map.set("contact", [9084237897, 32984798]);
// console.log(map.has('age'));

// for (let [key, value] of map) {
//   console.log(key + "=>" + value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// Q. Print the frequency of each number

let arr = [13, 34, 4, 5, 5, 6, 322, 54, 6, 6, 34, 2, 45, 65];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  //   if (map.has(arr[i])) {
  //     map.set(arr[i], map.get(arr[i]) + 1);
  //   } else {
  //     map.set(arr[i], 1);
  //   }

  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map);
