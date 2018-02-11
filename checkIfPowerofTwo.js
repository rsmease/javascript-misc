const checkIfPowerOfTwo = function(num) {
  while (num > 2) {
    num /= 2;
    if (!(Math.floor(num) === num)) {
      return false;
    }
  }
  return num === 2;
};

console.log(checkIfPowerOfTwo(16));
