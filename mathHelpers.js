Math.round = function(number) {
  if (number - this.floor(number) >= 0.5) {
    return this.ceil(number);
  } else {
    return this.floor(number);
  }
};

Math.ceil = function(number) {
  if (number.toString().includes(".")) {
    return this.floor(number) + 1;
  } else {
    return parseFloat(number);
  }
};

Math.floor = function(number) {
  var numParts = number.toString().split(".")[0]
  return parseFloat(numParts);
};
