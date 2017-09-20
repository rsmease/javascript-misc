// Description:

// Define crossover operation over two equal-length strings A and B as follows:

// the result of that operation is a string of the same length as the input strings
// result[i] is chosen at random between A[i] and B[i]
// Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

// Example

// For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be
// stringsCrossover(inputArray, result) = 2.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.string inputArray
// A non-empty array of equal-length strings.

// Constraints:
// 2 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [input] string result
// A string of the same length as each of the inputArray elements.

// Constraints:
// result.length = inputArray[i].length.

// [output] integer
// 
// 
function stringsCrossover(inputArray, result) {
	var validCrossoverCount = 0;
	for (var i = 0; i < inputArray.length - 1; i++) {
		for (var j = i+1; j < inputArray.length; j++) {
			if (checkCross(inputArray[i], inputArray[j], result)) {
				validCrossoverCount++;
			}
		}
	}
	return validCrossoverCount;
}

function checkCross(string1, string2, test) {
	// console.log(string1);
	// console.log(string2);
	for (var i = 0; i < string1.length; i++) {
		var rangeLimit1 = string1.charCodeAt(i);
		var rangeLimit2 = string2.charCodeAt(i);
		var checkTest = test.charCodeAt(i);
		if (checkTest !== rangeLimit1 && checkTest !== rangeLimit2) {
			return false; 
		}
	}
	return true; 
}

console.log(stringsCrossover(["a", "b", "c", "d", "e"], "c"));