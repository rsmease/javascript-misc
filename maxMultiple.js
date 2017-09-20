function maxMultiple(divisor, bound) {
	for (var i = bound; i >= divisor; i--) {
		if (i % divisor === 0) {
			return i;
		}
	}
}
