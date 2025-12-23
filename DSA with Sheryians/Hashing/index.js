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

let arr = [2,2,43, 43, 5, 45, 45,23,56,3,23, 5, 5, 56, 3];

let set = new Set();
for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) {
    set.delete(arr[i]);
  } else set.add(arr[i]);
}

console.log(set);
