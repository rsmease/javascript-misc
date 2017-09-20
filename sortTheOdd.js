function sortArray(array) {
  if (array.length === 0) {
    return array;
  }

  //remove odds from array
  evens = array.map(function(ele) {
    return isEven(ele) ? ele : undefined;
  })

  //filter and sort odds
  oddsSorted = array.filter(function(ele) {
    return !(isEven(ele));
  }).sort(function(a, b) { return a - b; });

  //map sorted odds back to array
  result = []
  evens.forEach(function(ele) {
    isEven(ele) ? result.push(ele) : result.push(oddsSorted.shift());
  })
  return result;
}

function isEven(num) {
  return num % 2 === 0
}

console.log(sortArray([1, 3, 5, 8, 0]))
