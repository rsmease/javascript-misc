function arrayMaxConsecutiveSum(inputArray, k) {
    
    currentSub = inputArray.slice(0, k);
    currentSum = currentSub.reduce(function(a,b) {return a+b});

    maxSum = currentSum;
    console.log(currentSum);
    
    for (var i = 1; i <= inputArray.length - k; i++) {

       currentSum -= inputArray[i-1];
       currentSum += inputArray[i+k-1];
       console.log(currentSum);

       if (currentSum > maxSum) {
            maxSum = currentSum;
       }
    }

    return maxSum;
}

