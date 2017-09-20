function leastFactorial(n) {
    
    for (var i = 1; i < 10; i++) {
       if (factorial(i) >= n) {
           return factorial(i);
       }
    }

}

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(leastFactorial(17));