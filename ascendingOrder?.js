//refactored for ES6 Sep 28 17

function isAscending(arr) {
  var copy = arr.slice();
  return copy.join("") === copy.sort((a, b) => a - b).join("");
}

console.log(isAscending([0, 1, 4]))
console.log(isAscending([0, 1, -4]))
