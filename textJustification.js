function textJustification(words, L) {
	
	var totalLen = words.join(" ").length;
	var totalLines = Math.ceil(totalLen / L);
	var justifiedLines = []

	var line = [];
	var lineLen = 0
	for (var i = 0; i < words.length; i++) {
		var currentWord = words[i]
		// console.log(currentWord);
		// console.log(lineLen);
		if (lineLen + currentWord.length < L) {
			line.push(currentWord);
			lineLen += (currentWord.length + 1);
			if (i === (words.length - 1)) {
				justifiedLines.push(line.join(" "));
				break;
			}
		} else {
			justifiedLines.push(line.join(" "));
			line = [];
			lineLen = 0;
			i--;
		}
	}

	// console.log(justifiedLines);

	justifiedLines2 = [];

	justifiedLines.forEach(function(ele, i, arr) {
		var currentLineLen = ele.length;
		var remainingSpacesToAllocate = L - currentLineLen;

		var currentLineSplit = ele.split(" ");
		var numInterwords = currentLineSplit.length - 1;

		for (var j = 0; j < remainingSpacesToAllocate; j++) {
			correctIndex = j % numInterwords;
			currentLineSplit[correctIndex] += " ".repeat(1);
		}

		justifiedLines2.push(currentLineSplit.join(" "));

	})
	
	return justifiedLines2;
}


// function isRemainderFree(num, numEle) {
// 	return (numEle % num === 0)
// }

textJustification(["This", "is", "an", "example", "of", "text", "justification."], 16)