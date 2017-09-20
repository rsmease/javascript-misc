//failed

function revrot(str, sz) {

  //handle edge cases
  if (sz < 1 || str === "" || sz > str.length) {
    return "";
  }


  //set up slices per sz and corresponding cubic digit sums
  var slices = getSlices(str, sz);
  var numSlices = toNumArr(slices)
  var cubicSumSlices = numSlices.map(num => cubicDigitSum(num))

  //reverse or rotate action
  return numSlices.map(function(ele, i) {
    var numString = ele.toString();
    if (isEven(cubicSumSlices[i])) {
      return numString.reverse()
    } else {
      return numString.substring(1) + numString.substring(0, 1);
    }
  }).join("")
}

function getSlices(str, sz) {
  var slices = []
  var start = 0
  for (var i = 0; i <= str.length - sz; i += sz) {
    var newSlice = str.slice(i, i + sz);
    slices.push(newSlice);
  }
  return slices;
}

function toNumArr(str) {
  return [ ...str ].map(num => parseInt(num));
}

function isEven(num) {
  return num % 2 === 0;
}

function cubicDigitSum(number) {
  var digits = [ ...number.toString() ].map(num => parseInt(num));
  var cubicDigits = digits.map(num => Math.pow(num, 3))
  return cubicDigits.reduce((a, b) => a + b);
}

console.log(revrot("1234", 0))
