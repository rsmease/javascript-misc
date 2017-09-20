//failed

function maximumSum(a, q) {
	var aCopy = a.slice(0);
	var maxSum = 0;
	for (var i = 1; i <= a.length; i++) {
		var currentSum = 0;
		for (var j = 0; j < q.length; j++) {
			var currentRange = aCopy.slice(q[j][0], q[j][1] + 1);
			currentSum += currentRange.reduce(function(a, b) {return a + b});
		}
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
		var aCopy = a.slice(i).concat(a.slice(0, i));
		console.log(aCopy);
	}
	return maxSum;
}

var arr1 = [4, 2, 1, 6, 5, 7, 2, 4];
var range1 = [[1,6], 
 [2,4], 
 [3,6], 
 [0,7], 
 [3,6], 
 [4,4], 
 [5,6], 
 [5,6], 
 [0,1], 
 [3,4]]

console.log(maximumSum(arr1, range1));