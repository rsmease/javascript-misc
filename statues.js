function makeArrayConsecutive2(statues) {
	var sortedStatues = statues.sort(function(a, b) {
  		return a - b;
	});
	var missingCount = 0;
	for (var i = 0; i < sortedStatues.length - 1; i++) {
		var difference = Math.abs(sortedStatues[i] - sortedStatues[i+1]);
		difference--;
		missingCount += difference;
	}
	return missingCount;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))