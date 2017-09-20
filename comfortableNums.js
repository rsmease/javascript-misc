function comfortableNumbers(L, R) {
	var allComfort = [];
	for (var i = L; i <= R; i++) {
		var currentTest = i;
		var currentLower = i - addDigits(i);
		var currentUpper = i + addDigits(i);
		for (var j = currentLower; j <= currentUpper; j++) {
			if (j !== i) {
				if (i < j) {
					var comfortPair = i.toString() + " " + j.toString();
				} else {
					var comfortPair = j.toString() + " " + i.toString();
				}
				allComfort.push(comfortPair);
			}
		}
	}
	var comfortSet = new Set(allComfort);
	return (allComfort.length - comfortSet.size);
}

function addDigits(num) {
	numSplit = num.toString().split("").map(Number);
	digitSum = numSplit.reduce(function(a, b) {
		return a + b;
	})
	return digitSum;
}

console.log(comfortableNumbers(10, 12));