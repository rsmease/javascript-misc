function longestWord(text) {

	var splitText = text.split(" ");
	var cleanText = [];
	var lens = [];

	//Remove punctuation from words; return to new array and check for lengths of cleaned words;
	for (var i = 0; i < splitText.length; i++) {
		var currentWord = splitText[i].split("");
		var cleanCurrentWord = [];
		currentWord.forEach(function(ele, i, arr) {
			if (isLetter(ele)) {
				cleanCurrentWord.push(ele);
			} else {
				cleanText.push(cleanCurrentWord.join(""));
				lens.push(cleanCurrentWord.length);
				cleanCurrentWord = [];
			}
		})
		cleanText.push(cleanCurrentWord.join(""));
		lens.push(cleanCurrentWord.length);
	}

	var longestWordIndex = lens.indexOf(maxOfArr(lens));

	return cleanText[longestWordIndex];

}

//Helper functions
function isLetter(char) {
	return alpha.indexOf(char) > -1;
}
function maxOfArr(numArr) {
	return Math.max.apply(null, numArr);
}

var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

console.log(longestWord("Ready, steady, go!"));