// You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

// It is guaranteed that the sum of all elements in the array is divisible by 3.

// Example

// For a = [0, -1, 0, -1, 0, -1], the output should be
// threeSplit(a) = 4.

// Here are all possible ways:

// [0, -1] [0, -1] [0, -1]
// [0, -1] [0, -1, 0] [-1]
// [0, -1, 0] [-1, 0] [-1]
// [0, -1, 0] [-1] [0, -1]
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer a

// Guaranteed constraints:
// 5 ≤ a.length ≤ 104,
// -108 ≤ a[i] ≤ 108.

// [output] integer

// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
// 
function threeSplit(arr) {

	var validSplitCount = 0;
	var splitLib = [];
	for (var i = 0; i < arr.length - 2; i++) {
		for (var j = i + 1; j < arr.length - 1; j++) {
			for (var k = j+1; k < arr.length; k++) {
				var subArr1= arr.slice(0, j);
				var subArr2 = arr.slice(j, k);
				var subArr3 = arr.slice(k);
				var allSubs = subArr1.toString() + " break " + subArr2.toString() + " break " + subArr3.toString();
				if (splitLib.indexOf(allSubs) === -1 ) {
					splitLib.push(allSubs);
					if (sumOfArr(subArr1) === sumOfArr(subArr2) && sumOfArr(subArr2) === sumOfArr(subArr3)) {
						validSplitCount++;
					}	
				}
			}
		}
	}
	return validSplitCount;

}

function sumOfArr(numArr) {
	return numArr.reduce(function(a, b) {return a + b});
}

var test = [0, -1, 0, -1, 0, -1];
console.log(threeSplit(test));