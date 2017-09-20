function findMissingNumber(sequence){
	var split = sequence.split(" ").sort();
	if (sequence.length === 0) {
		return 0;
	}
	split.forEach(function(ele) {
		if (isNan(ele)) {
			console.log("Invalid sequence");
			return 1;
		}
	})
	for (var i = 1; i <= split.length; i++) {
		if (split.indexOf(i.toString()) === -1) {
			return i;
		}
	}
	return 0;
}