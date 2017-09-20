function findOdd(A) {
  frequencyTable = {}
  A.forEach(function(number) {
    if (number in frequencyTable) {
      frequencyTable[number]++;
    } else {
      frequencyTable[number] = 1;
    }
  })
  for (var number in frequencyTable) {
    if (isOdd(frequencyTable[number])) {
      return parseInt(number);
    }
  }
}

function isOdd(number) {
  return number % 2 != 0
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
