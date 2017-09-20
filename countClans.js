function numberOfClans(divisors, k) {
    var divisorChecks = [];
    for (var i = 1; i <= k; i++) {
        var currentNum = i;
        divisorChecks.push(checkDivisors(divisors, currentNum));
        
    }
    // console.log(divisorChecks);
    var countClans = new Set(divisorChecks);
    return countClans.size;
}

function checkDivisors(divisors, num) {
    var divisorCheck = [];
    divisors.forEach(function(ele, i, arr) {
        if (num % ele === 0) {
            divisorCheck.push(1);
        } else {
            divisorCheck.push(0);
        }
    })
    // console.log(divisorCheck);
    return divisorCheck.toString();
}

var test = numberOfClans([2, 3], 6);
console.log(test);