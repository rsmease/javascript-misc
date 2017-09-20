function isSumOfConsecutive2(n) {
	var correctSumCount = 0
	var loopLimit = Math.ceil(n/2);
	for (var i = 1; i <= loopLimit; i++) {
		var sum = i;
		for (var j = i+1; j <= ; j++) {
			sum += j;
			if (sum === n) {
				correctSumCount++;
				break;
			}
		}
	}
	return correctSumCount;
}

console.log(isSumOfConsecutive2(9));