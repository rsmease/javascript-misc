//Return expanded form of number.
//E.g. 70410 returns 70000 + 400 + 10; 7241 returns 7000 + 200 + 40 + 1

function expandedForm(n) {

  var components = [];
  var powerOfTen = 1;
  var remainder = Math.abs(n);

  while (Math.pow(10, powerOfTen) < Math.abs(n) * 10) {
    components.push(remainder % Math.pow(10, powerOfTen));
    remainder -= (remainder % Math.pow(10, powerOfTen))
    powerOfTen++;
  }

  //remove zeros, modify for negative input
  components = components.filter(ele => ele !== 0);
  if (n < 0) {
    components = components.map(ele => -ele)
  }

  return components.reverse().join(" + ")
}

console.log(expandedForm(-7045235304))
console.log(expandedForm(12423419124100))
