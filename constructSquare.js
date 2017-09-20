// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

// If there is no solution, return -1.

// Example

// For s = "ab", the output should be
// constructSquare(s) = 81.
// The largest 2-digit square number with different digits is 81.
// For s = "zzz", the output should be
// constructSquare(s) = -1.
// There are no 3-digit square numbers with identical digits.
// For s = "aba", the output should be
// constructSquare(s) = 900.
// It can be obtained after reordering the initial string into "baa" and replacing "a" with 0 and "b" with 9.

function constructSquare(s) {

var neededFrequencyMap = frequencyArr(s);
console.log("The needed frequency map is " + neededFrequencyMap);

var squares = [];
for (var i = Math.pow(10, s.length); i >= 1; i--) {
	var currentSquare = Math.pow(i, 2).toString();
	// console.log(currentSquare);
	// console.log(frequencyArr(currentSquare));
	if (frequencyArr(currentSquare) === neededFrequencyMap) {
		return parseInt(currentSquare);
	}
}


return -1;

}

function frequencyArr(s) {
	split = s.split("").sort();
	var asNums = [];

	var appearsIndex = 0;
	asNums[0] = 0;
	
	for (var i = 1; i < split.length; i++) {
		if (split[i] === split[i-1]) {
			asNums.push(appearsIndex);
		} else {
			appearsIndex++;
			asNums.push(appearsIndex);
		}
	}

	return asNums.join(" ");
}

console.log(constructSquare("abcbbb"))


