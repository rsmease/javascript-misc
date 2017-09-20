var testArr = [3, 4, 5,, 7, 8, 9, 10];

var arr = ['a', , 'c'];
var sparseKeys = Object.keys(testArr);
var denseKeys = [...testArr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
console.log(...testArr.keys())