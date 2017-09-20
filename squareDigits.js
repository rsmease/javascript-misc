function squareDigitsSequence(a0) {
    var seqCount = 1;
    var seqSum = a0;
    var seenNums = [a0];
    while (seqCount < 500) {
        var currentNum = seqSum.toString().split("").map(Number);
        var currentSum = 0;
        currentNum.forEach(function(ele, i, arr) {
            currentSum += ele*ele;
        })
        console.log(currentSum);
        seqCount++;
        if (seenNums.indexOf(currentSum) >= 0) {
        	return seqCount;
        } else {
        	seenNums.push(currentSum);
        }
        seqSum = currentSum;
        
    }
    return "Failed";
}

console.log(squareDigitsSequence(103))