function lineEncoding(s) {
	var sSplit = s.split("");
	var startingChar = sSplit[0];
	var startingCharIndex = 0;
	var newS = [];
	for (var i = 1; i < sSplit.length; i++) {
		var currentChar = sSplit[i];
		var currentSubstring = sSplit.slice(startingCharIndex, i);
		if (currentChar !== startingChar) {
			newS.push(currentSubstring.join(""));
			startingChar = currentChar;
			startingCharIndex = i;
		}
		if (i === sSplit.length - 1) {
			currentSubstring = sSplit.slice(startingCharIndex, i);
			if (currentChar === startingChar) {
				currentSubstring.push(currentChar);
				newS.push(currentSubstring.join(""));
			} else {
				newS.push(currentChar);
			}
		}
	}
	
	var encoded = []

	newS.forEach(function(ele, i, arr) {
		if (ele.length > 1) {
			encoded.push((ele.length).toString() + ele[0]);
		} else {
			encoded.push(ele);
		}
	})
	return encoded.join("");
	console.log(encoded.join(""));
}

lineEncoding("adsfasdfdddff");