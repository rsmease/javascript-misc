var capitals = function (word) {
	var result = [];
	word.split("").forEach(function(ele, i) {
		if (isCapitalized(ele)) {
			result.push(i);
		}
	})
	return result;
}

function isCapitalized(letter) {
	return letter === letter.toUpperCase();
}