function countSumOfTwoRepresentations2(n, l, r) {
	var sumCount = 0;

	for (var i = l; i <= r; i++) {
		var j = n - i;
		if (j >= l && j <= r && j >= i) {
				console.log(i + " , " + j)
				sumCount++;
			}
		}
	
	return sumCount;
}

console.log(countSumOfTwoRepresentations2(93, 24, 58));

