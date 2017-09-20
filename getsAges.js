function getAges(sum,difference){
	var younger = (sum - difference) / 2;
	var older = younger + difference;
	if (younger < 0 || older < 0 || sum < 0 || difference < 0) {
		return null;
	} else {
		return [older, younger];
	}
};