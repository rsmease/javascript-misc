//check that all members of arguments objects are of type Number

//ES6
function allNumbers(...arguments) {
  return arguments.every(ele => typeof ele === 'number')
}

console.log(allNumbers(1, 2, 3))
console.log(allNumbers(1, 2, []))
