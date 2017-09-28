//refactored for ES6, Sep 28 17

Array.prototype.difference = function (other_arr) {
  return this.slice().filter(ele => other_arr.indexOf(ele) === -1)
};

console.log([2,1].difference([1]))
