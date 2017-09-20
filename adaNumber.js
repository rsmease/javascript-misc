// Description:

// Consider two following representations of a non-negative integer:

// A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
// An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, …, f and A, B, …, F are used.
// Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

// Your task is to determine whether the given string is a valid integer representation.

// Note: this is how integer numbers are represented in the programming language Ada.

// Example

// For line = "123_456_789", the output should be
// adaNumber(line) = true;
// For line = "16#123abc#", the output should be
// adaNumber(line) = true;
// For line = "10#123abc#", the output should be
// adaNumber(line) = false;
// For line = "10#10#123ABC#", the output should be
// adaNumber(line) = false;
// For line = "10#0#", the output should be
// adaNumber(line) = true;
// For line = "10##", the output should be
// adaNumber(line) = false.
// Input/Output

// [time limit] 3000ms (cs)
// [input] string lineA non-empty string.
// Constraints:
// 2 ≤ line.length ≤ 30.

// [output] booleantrue if line is a valid integer representation, false otherwise.
// Tests:

function adaNumber(line) {
	var lineSplit = line.split("#");
	console.log(lineSplit);

	if (lineSplit.length === 1) {
		if (lineSplit[0].charAt(-1) === "_") {
			console.log("Normal integer with trailing underscore");
			return false;
		} else {
			for (var i = 0; i < line.length; i++) {
				if (validNums.indexOf(line.charAt(i)) === -1) {
					console.log("Normal integer with irregular character " + line.charAt(i));
					return false;
				}
			}
			return true; 
		}
	} else if (lineSplit.length === 2 || (lineSplit.length === 3 && lineSplit[2] === "")) {

		var base = lineSplit[0];
		if (base.charAt(0) === "_") {
			console.log("Base with leading underscore")
			return false;
		}
		var numBase = "";
		for (var i = 0; i < base.length; i++) {
			if (validBase.indexOf(base.charAt(i)) === -1) {
				console.log("Base with irregular character " + base.charAt(i))
				return false;
			} else if (base.charAt(i) !== "_") {
				numBase += base.charAt(i);
			}
		}
		if (parseInt(numBase) < 2 || parseInt(numBase) > 16) {
			console.log("Base number outside of 2 - 16 inclusive range")
			return false; 
		}

		var num = lineSplit[1];
		if (num.charAt(-1) === "_") {
			console.log("Ada number with trailing underscore");
			return false;
		}
		for (var i = 0; i < num.length; i++) {
			if (validAdaNums.indexOf(num.charAt(i)) === -1) {
				console.log("Ada number with irregular character " + num.charAt(i));
				return false;
			}
		}
	} else {
		console.log("Split over hash led to too-long array");
		return false; 
	}
	return true; 
}

var validNums = "0123456789_".split("");
var validBase = "0123456789_".split("");
var validAdaNums = "0123456789abcdefABCDEF_".split("");

console.log(adaNumber("123_456_789"))