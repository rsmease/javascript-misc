//Refactored Sep 28 17
//all functions made safe by addition of .slice() copy

Array.prototype.square = function () {
  return this.slice().map(ele => ele*ele);
};

Array.prototype.cube = function () {
  return this.slice().map(ele => ele*ele*ele);
};

Array.prototype.sum = function () {
  return this.length === 0 ? 0 : this.slice().reduce((a, b) => a + b)
};

Array.prototype.average = function () {
  if (this.length === 1) {
    return NaN;
  } else {
    return this.sum() / this.length;
  }
};

Array.prototype.even = function () {
  return this.slice().filter(ele => ele % 2 === 0)
};

Array.prototype.odd = function () {
  return this.slice().filter(ele => ele % 2 !== 0)
};

var newArr = [1, 2, 3, 4]
console.log(newArr.cube())
console.log(newArr)
