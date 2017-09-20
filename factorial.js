function factorial(n) {
  if (n === 0 || n === 1) { return 1; };
  if (n < 0 || n > 12) { throw RangeError; };
  product = 1;
  for (var i = 2; i <= n; i++) {
    product *= i;
  }
  return product;
}
