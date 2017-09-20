// Task

// Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

// Input/Output

// [input] string s

// A string that contains uppercase letters, lowercase letters numbers and spaces.

// 1 ≤ s.length ≤ 20.

// [output] a boolean value

// true if s is cool, false otherwise.

// Example

// For s = "aQwFdA", the output should be true

// For s = "aBC", the output should be false;

// For s = "AaA", the output should be true;

// For s = "q q", the output should be false.
var digits = "0123456789".split("");

function coolString(s) {
	for (var i = 0; i < s.length; i++) {
		var currentChar = s.charAt(i);
		//console.log(currentChar)
		if (digits.indexOf(currentChar) > -1 || currentChar === " ") {
			console.log(i, "failed test 1");
			return false;
		}
		if (i > 0) {
			if (isLower(currentChar)) {
				if (isLower(s.charAt(i-1))) {
					console.log(i, "failed test 2");
					return false;
				}
			} else {
				if (!(isLower(s.charAt(i-1)))) {
					console.log(i, "failed test 3");
					return false;
				}
			}
		}
	}
	return true;
}

function isLower(char) {
	return char === char.toLowerCase();
}

console.log(coolString("2"))