// Description:

// You’re given a substring s of some cyclic string. What’s the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

// Example

// For s = "cabca", the output should be
// cyclicString(s) = 3.

// "cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.

// Input/Output

// [time limit] 3000ms (cs)
// [input] string s
// Constraints:
// 3 ≤ s.length ≤ 15.
// 
function cyclicString(s) {
	for (var i = 0; i < s.length - 1; i++) {
		for (var j = i + 1; j < s.length; j++) {
			var test = s.substring(i, j);
			var remainder = s.substring(j);

			for (var k = 0; k < remainder.length; k++) {
				var testIndex = k % test.length;
				if (remainder[k] !== test[testIndex]) {
					break;
				}
				if (k === remainder.length - 1) {
					console.log(test)
					return test.length;
				}
			}
		}
	}
}

console.log(cyclicString("cabca"))