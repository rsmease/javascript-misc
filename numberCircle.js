function circleOfNumbers(n, firstNumber) {
    if (firstNumber < n / 2) {
    	return firstNumber + Math.floor(n/2);
    } else if (firstNumber === n / 2) {
    	return 0;
    } else {
    	return firstNumber - Math.floor(n/2);
    }
}

