function isPower(n) {
	if (n === 1) {
		return true;
	}
	var rangeCap = Math.ceil(Math.sqrt(n));
	for (var i = 2; i <= rangeCap; i++) {
		for (var j = 2; j <= rangeCap; j++) {
			if (Math.pow(i, j) === n) {
				return true;
			}
		}
	}
	return false;
}

console.log(isPower(144));

