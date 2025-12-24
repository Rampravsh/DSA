// Q Print numbers from Lrange to Urange using recursion

function printNumber(lrange, urange) {
  if (lrange >= urange) {
    return;
  }
  console.log(lrange);
  printNumber(lrange + 1, urange);
}

// console.log(printNumber(2, 8));

// Q Print numbers from Urange to lrange using recursion

function printNumber2(lrange, urange) {
  if (lrange >= urange) {
    return;
  }
  printNumber2(lrange + 1, urange);
  console.log(lrange);
}

// console.log(printNumber2(2, 8));

// Q. sum array using recursion 

let sum =0
function sumRecursive(arr){
    
    if(arr.length===0){
        return
    }
    

}



