function every(array, test) {
	for (var i = 0; i < array.length; i++) {
		if (!(test(array[i]))) {
			return false;
		}
	}
	return true;
}

function some(array, test) {
	for (var i = 0; i < array.length; i++) {
		if (test(array[i])) {
			return true;
		}
	}
	return false;
}

var test1 = [11, 12, 31, 51, 71];

function lessThan10(number) {
	return number < 10;
}

console.log(test1.some(lessThan10));
