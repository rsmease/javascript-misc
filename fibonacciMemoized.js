var fibonacci = (function () {
  var mem = [0, 1];
  return function (n) {
    if (mem[n] === undefined)
      mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return mem[n];
  };
})();
