function digitsProduct(product) {
	if (product < 10 && product > 1) {
		return product;
	}
	if (product === 0) {
		return 0;
	}
	if (isPrime(product)) {
		return -1;
	}
	var test = 0;
	var result = calculateProductOfDigits(test);
	while (result !== product) {
		test++;
		result = calculateProductOfDigits(test);
		// console.log(result);
	}
	return test; 

}

function isEven(num) {
	return num % 2 === 0;
}

function calculateProductOfDigits(num) {
	var numDigits = num.toString().split("").map(Number);
	return prodArr(numDigits);
}

function prodArr(numArr) {
	return numArr.reduce(function(a, b) {return a * b});
}

function isPrime(num) {
	console.log("TEST")
	for (var i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false; 
		}
	}
	return true;
}

console.log(digitsProduct(19));