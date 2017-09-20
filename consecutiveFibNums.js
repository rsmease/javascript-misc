function productFib(prod){

  //initialize fibonnacci scanner
  var fib = [0, 1, 1]
  var i = 0
  var j = 1
  var currentProd = fib[i] * fib[j];

  //run sequence
  while (currentProd < prod) {
    i++;
    j++;
    var currentProd = fib[i] * fib[j];
    fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
    if (i > 500) {
      break;
    }
  }

  //determine result
  if  (currentProd === prod) {
    return [fib[i], fib[j], true];
  } else {
    return [fib[i], fib[j], false];
  }
}

console.log(productFib(4895))
