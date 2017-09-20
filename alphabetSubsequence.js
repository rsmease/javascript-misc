// Description:

// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg" or s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace" or s = "bxz", the output should be
// alphabetSubsequence(s) = true.
// Input/Output

// [time limit] 3000ms (cs)
// [input] string sConstraints:
// 2 ≤ s.length ≤ 15.
// [output] booleantrue if the given string is a subsequence of the alphabet, false otherwise.

function alphabetSubsequence(s) {
	var sArr = Array.from(s);
	var sSet = new Set(sArr);

	if (sSet.size !== sArr.length) {
		console.log("FAILED SET TEST");
		return false;
	}

	var sArrUnsorted = sArr.slice(0);
	var sArrSorted = sArr.slice(0).sort();

	for (var i = 0; i < sArrSorted.length; i++) {
		if (sArrSorted[i] !== sArrUnsorted[i]) {
			return false; 
		}
	}
	// console.log(sArrUnsorted);

	return true; 
}

console.log(alphabetSubsequence("bxz"))