arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

arr1 = arr.reduce(function(acc, currV, currI, arr) {
	return acc.concat(currV);
}, [2, 3])

console.log(arr1);