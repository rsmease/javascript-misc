function alphabet_position(text) {
	var newText = [];
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	for (var i = 0; i < text.length; i++) {
		var currentLower = text.toLowerCase().charAt(i);
		if (alphabet.indexOf(currentLower) !== -1) {
			newText.push(alphabet.indexOf(currentLower) + 1);
		}
	}
	return newText.join(" ");
}

console.log(alphabet_position("The sunset sets at twelve o' clock."))