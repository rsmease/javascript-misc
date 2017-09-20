function tripletSum(x, arr) {
	
	arr.sort(function(a,b) {
		return a - b;
	});

	for (i = 0; arr[i] < x; i++) {
		var test1 = arr[i];
		for (j = i + 1; arr[j] < x; j++) {
			var test2 = arr[j];
			for (k = j + 1; arr[k] < x; k++) {
				var test3 = arr[k];
				if (test1 + test2 + test3 === x) {
					return true
				}
			}
		}
	}

	return false;

}

console.log(tripletSum(15, [14, 1, 2, 3, 8, 15, 3]))