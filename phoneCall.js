function phoneCall(min1, min2_10, min11, s) {

	var maxLength = 0;

	if (s >= min1) {
		maxLength += 1;
		s -= min1;
	}

	// console.log(maxLength);

	if (s >= min2_10) {
		var min2_10Tracker = 0;
		while (s >= min2_10 && min2_10Tracker < 9) {
			maxLength += 1;
			s -= min2_10;
			min2_10Tracker += 1;
		}
	}

	// console.log(maxLength);

	if (s >= min2_10 && s >= min11) {
		while (s >= min11) {
			maxLength += 1;
			s -= min11;
		}
	}

	return maxLength

}

console.log(phoneCall(2, 1, 2, 20));
