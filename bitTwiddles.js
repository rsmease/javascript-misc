//failed

function isEven(n) {

}

function isOdd(n) {
  return n % 2 !== 0
}

function halfAndFloor(n) {
  return Math.floor(n/2)
}

function isPowerOfTwo(n){
  while (n >= 1 && n % 2 == 0)
  n = n / 2;
  if (n == 1) return true
  else return false
}

function nthPowerOfTwo(n) {
  return Math.pow(2, n)
}

function truncate(n) {
  if (n >= 0) return Math.floor(n)
  else return Math.ceil(n)
}

function abs(n) {
  return Math.abs(n)
}
