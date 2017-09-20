function solution(value){
  return "Value is " + padFive(value);
}

function padFive(n) {
  var digits = strDigits(n);
  while (digits.length < 5) {
    digits.unshift("0");
  }
  return digits.join("");
}

function strDigits(n) {
  return n.toString().split("");
}

console.log(solution(24))
