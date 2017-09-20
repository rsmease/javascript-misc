// Task

// Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

// Input/Output

// [input] string s

// String of odd length consisting of English letters.

// 3 ≤ inputString.length ≤ 99.

// [output] a string

// The resulting string.

// Example

// For s = "Aba", the output should be "aba"

// For s = "ABa", the output should be "ABA"

// describe("Basic Tests", function(){ 
// it("It should works for basic tests.", function(){

// Test.assertEquals(caseUnification("Aba"),"aba")

// Test.assertEquals(caseUnification("ABa"),"ABA")

// Test.assertEquals(caseUnification("ZZZZZ"),"ZZZZZ")

// })})

function caseUnification(s) {
  //coding and coding..
  var counts = countCase(s);
  if (counts[0] > counts[1]) {
  	return s.toUpperCase();
  } else {
  	return s.toLowerCase();
  }
}

function countCase(str) {
	upperLowerCounts = [0,0];
	for (var i = 0; i< str.length; i++) {
		var currentChar = str.charAt(i)
		if (currentChar.toUpperCase() === currentChar) {
			upperLowerCounts[0]++
		} else {
			upperLowerCounts[1]++
		}
	}
	return upperLowerCounts;
}

console.log(caseUnification("Aba"))

//A cooler solution that uses regex
//function caseUnification(s) {
//   return s.split(/[a-z]/).length>s.split(/[A-Z]/).length?s.toLowerCase():s.toUpperCase()
// }