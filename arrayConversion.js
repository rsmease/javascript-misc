// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
// arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer inputArray
// Constraints:
// 1 ≤ inputArray.length ≤ 20,
// -9 ≤ inputArray[i] ≤ 99.

// [output] integer
// 
function arrayConversion(arr) {
	var status = true;
	var arrCopy = arr.slice(0);
	while (arrCopy.length > 1) {
		if (status) {
			var arrCopyCopy = [];
			for (var i = 0; i < arrCopy.length; i+= 2) {
				arrCopyCopy.push(arrCopy[i] + arrCopy[i+1]);
			}
		} else {
			var arrCopyCopy = [];
			for (var i = 0; i < arrCopy.length; i+= 2) {
				arrCopyCopy.push(arrCopy[i] * arrCopy[i+1]);
			}
		}
		// console.log(arrCopyCopy);
		arrCopy = arrCopyCopy;
		status = !(status);
	}
	return arrCopy[0];
}

console.log(arrayConversion([0]))