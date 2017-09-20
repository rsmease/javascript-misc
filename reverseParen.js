function reverseParentheses(s) {
	split = s.split("(");
	result = [];
	for (var i = 0; i < split.length; i++) {
		var splitAgain = split[i].split("");
		if (splitAgain.indexOf(")") >= 0) {
			var toReverse = splitAgain.slice(0, splitAgain.indexOf(")"));
			var toReverse = toReverse.reverse();
			var splitAgain = toReverse.concat(splitAgain.slice(splitAgain.indexOf(")") + 1))
		}
		result.push(splitAgain.join(""));
	}
	console.log(result.join(""));
	return (result.join(""));

}

reverseParentheses("a(bc)de");