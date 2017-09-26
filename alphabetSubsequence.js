//boolean function; return true if string is:
//(1) alphabetic
//(2) increasing
//(3) composed of unique characters

//refactored Sep 26 17

function alphabetSubsequence(s) {
	if (hasRepeatingChars(s)) { return false; };
	if (hasNonAlphaChars(s)) { return false; };
	return s.split("").slice(0).sort().join("") === s;
}

function hasRepeatingChars(s) {
	var sArr = Array.from(s);
	var sSet = new Set(sArr);
	return sSet.size !== sArr.length;
}

function hasNonAlphaChars(s) {
	var alpha = s.split("").filter(ele => /[A-Za-z]/.test(ele)).join("")
	return alpha.length !== s.length;
}

console.log(alphabetSubsequence("cmz"))
