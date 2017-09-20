function sumUpNumbers(text) {

	var splitText = text.split(" ");
	var cleanText = [];

	//Remove punctuation from words; return to new array and check for lengths of cleaned words;
	for (var i = 0; i < splitText.length; i++) {
		var currentWord = splitText[i].split("");
		console.log(currentWord);
		var cleanCurrentWord = [];
		currentWord.forEach(function(ele, i, arr) {
			if (isNum(ele)) {
				cleanCurrentWord.push(ele);
			} else {
				if (cleanCurrentWord.length > 0) {
					cleanText.push(parseInt(cleanCurrentWord.join("")));
					cleanCurrentWord = [];
				}
			}
		})
		if (cleanCurrentWord.length > 0) {
			cleanText.push(parseInt(cleanCurrentWord.join("")));
		}
	}

	if (cleanText.length > 0) {
		return sumArr(cleanText);
	} else {
		return 0;
	}

}

function isNum(char) {
	return nums.indexOf(char) > -1;
}
function sumArr(numArr) {
	return numArr.reduce(function (a, b) {return a + b});
}

var nums = "0123456789".split("");

console.log(sumUpNumbers("2 apples, 12 oranges"));
