// square() must return a copy of the array, containing all values squared, the original array must not be changed
// cube() must return a copy of the array, containing all values cubed, the original array must not be changed
// average() must return the average of all array values, average() on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers, the original array must not be changed
// odd() must return an array of all odd numbers, the original array must not be changed

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
