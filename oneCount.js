function rangeBitCount(a, b) {
	var arr = [];
	for (var i = a; i <= b; i++) {
		arr.push(i.toString(2).split("").map(Number));
	}
	// console.log(arr);
	var oneCount = 0;
	arr.forEach(function(ele, i, arr) {
		oneCount += ele.reduce(function(a,b) {
			return a + b;
		})
	})
	return oneCount;
}

console.log(rangeBitCount(2, 7));

