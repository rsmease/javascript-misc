// Description:

// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer items
// Non-empty array of positive integers.

// Constraints:
// 3 ≤ items.length ≤ 15,
// 1 ≤ items[i] ≤ 200.

// [output] array.integer
// Array containing answer values computed as described above.

function arrayPreviousLess(items) {
	var result = [-1];
	for (var i = 1; i < items.length; i++) {
		var currentVal = items[i];
		var prevVal = -1;
		for (var j = i-1; j >= 0; j--) {
			if (items[j] < currentVal) {
				prevVal = items[j];
				break;
			}
		}
		result.push(prevVal);
	}
	return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]))