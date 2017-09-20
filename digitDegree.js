function digitDegree(n) {
	// var digitSums = [];
	if (n < 10) {
		return 0;
	} else {
		var digitSum = n.toString().split("").map(Number).reduce(function(a, b) {return a + b});
		digitSums.push(digitSum);
		var digitDegree = 1;
		while (digitSum > 9) {
			digitDegree ++;
			var digitSum = digitSum.toString().split("").map(Number).reduce(function(a, b) {return a + b});

		}
		// digitSums.push(digitSum);
		// console.log(digitSums);
		// console.log(digitDegree);
		return digitDegree;
	}
}

digitDegree(123);