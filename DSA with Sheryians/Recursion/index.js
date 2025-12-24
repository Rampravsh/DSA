var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  }

  if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(1));