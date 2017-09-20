function multiplyAll(arr) {
  return function(multiplier) {
    return arr.map(function(ele) {ele *= multiplier})
  }
}
