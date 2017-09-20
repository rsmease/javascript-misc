// Define an alphabet reflection as follows: a turns into z, b turns into y, cturns into x, …, n turns into m, m turns into n, …, z turns into a.

// Define a string reflection as the result of applying the alphabet reflection to each of its characters.

// Reflect the given string.

// Example

// For inputString = "name", the output should be
// reflectString(inputString) = "mznv".

// Input/Output

// [time limit] 3000ms (cs)
// [input] string inputString
// A string of lowercase characters.

// Constraints:
// 3 ≤ inputString.length ≤ 10.

// [output] string
var alphaVals = "abcdefghijklmnopqrstuvwxyz".split("");

function reflectString(inputString) {
	var result = "";
	for (var i = 0; i < inputString.length; i++) {
		var currentChar = inputString.charAt(i);
		var currentCharIndex = alphaVals.indexOf(currentChar) + 1;
		// console.log(currentCharIndex);
		if (currentCharIndex === 1) {
			result += "z";
		} else {
			result += alphaVals.slice(-currentCharIndex, -currentCharIndex + 1);
		}
	}
	return result;
}

console.log(reflectString("name"))
