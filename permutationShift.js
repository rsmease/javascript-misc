function permutationShift(permutation) {
	var varianceMeasurements = [];
	permutation.forEach(function(ele, i) {
		varianceMeasurements.push(ele - i);
	})
	return MarrMax(varianceMeasurements) - arrMin(varianceMeasurements);
}

function arrMax(arr) {
	return Math.max.apply(null, arr);
}

function arrMin(arr) {
	return Math.min.apply(null, arr)
}