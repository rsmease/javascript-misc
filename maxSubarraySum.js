var maxSequence = function(arr){

  var max = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length; j > i; j--) {
      var currentSum = arr.slice(i, j).reduce(function(a, b) {
        return a + b;
      })
      if (currentSum > max) {
        max = currentSum;
      }
    }
  }
  return max

}

function maxOfArr(numArr) {
  return Math.max.apply(null, numArr);
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
