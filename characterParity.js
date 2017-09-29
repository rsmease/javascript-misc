// Description:

// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be
// characterParity(symbol) = "odd";
// For symbol = '8', the output should be
// characterParity(symbol) = "even";
// For symbol = 'q', the output should be
// characterParity(symbol) = "not a digit".
// Input/Output

// [time limit] 3000ms (cs)
// [input] char symbol
// [output] string
// Tests:
//
var numVals = "0123456789".split("");

function isEven(num) {
	return num % 2 === 0;
}

function characterParity(symbol) {
	if (numVals.indexOf(symbol) > -1) {
		if (isEven(parseInt((symbol)))) {
			return "even";
		} else {
			return "odd";
		}
	} else {
		return "not a digit";
	}
}

var test = ""

console.log(characterParity(test));
