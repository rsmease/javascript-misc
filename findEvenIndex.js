function findEvenIndex(arr) {
	if (arr.length === 0 || sumArr(arr.slice(1)) === 0) {
		return 0;
	} else if (sumArr(arr.slice(0, arr.length -1)) === 0) {
		return arr.length - 1
	} else {
		for (var i = 1; i < arr.length - 1; i++) {
			var rightArr = sumArr(arr.slice(0,i));
			var leftArr = sumArr(arr.slice(i+1));
			if (leftArr === rightArr) {
				return i;
			} 
		}
		return -1
	}
}

function sumArr(arr) {
	return arr.reduce(function(a, b) {return a + b});
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))