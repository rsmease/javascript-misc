function triangular( n ) {
	if (n > 0) {
		sum = 0;
		for (i = 0; i <= n; i++) {
			sum += i;
		}
		return sum;
	} else {
		return 0;
	}
}