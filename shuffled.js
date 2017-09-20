function shuffled(arr) {
	for (var i = 0; i < arr.length; i++) {
		testElement = arr[i];
		console.log(testElement);
		testSum = 0;
		for (var j = 0; j < arr.length; j++) {
			if (j !== i) {
				testSum += arr[j];
			}
		}
		if (testElement === testSum) {
			var removed = arr.splice(i, 1);
			console.log(removed)
			return arr.sort(function (a, b) {return a - b});
		}
	}
	return "failed";
}

var test1 = [1, 12, 3, 6, 2];
var test2 = [1, -3, -5, 7, 2];

console.log(shuffled(test2));