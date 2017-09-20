function digPow(n, p){
  digits = n.toString().split("").map(Number)
  digitPowerSum = 0
  currentPower = p
  digits.forEach(function(digit){
    digitPowerSum += Math.pow(digit, currentPower)
    currentPower++
  })
  return digitPowerSum % n === 0 ? digitPowerSum / n : -1
}

console.log(digPow(89, 1))
