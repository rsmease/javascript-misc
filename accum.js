function accum(s) {
	var buildString = []

	//set i equal to 1 so that it acts as accumulator
	for (var i = 0; i < s.length; i++) {
		var currentBuild = s.charAt(i).toUpperCase();
		if (i > 0) {
			currentBuild += s.charAt(i).toLowerCase().repeat(i);
		}
		buildString.push(currentBuild);
	}
	return buildString.join("-")
}

console.log(accum("Happy"))