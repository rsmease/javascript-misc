function oddOrEven(array) {
  if (array.length === 0) {
    array.push(0)
  }
  arrSum = array.reduce(function(a, b) { return a + b})
  if (arrSum % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}
