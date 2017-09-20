// Description:

// Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix. Return sum of all elements of that union.

// Example

// For

var matrix1 = [[1, 1, 1, 1], 
          [2, 2, 2, 2], 
          [3, 3, 3, 3]]
// a = 1 and b = 3, the output should be
// crossingSum(matrix, a, b) = 12.

// Here (2 + 2 + 2 + 2) + (1 + 3) = 12.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer matrix2-dimensional array of integers representing a rectangular matrix.
// Constraints:
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[0].length ≤ 5,
// 1 ≤ matrix[i][j] ≤ 100.

// [input] integer aA non-negative integer less than the number of matrix rows.
// Constraints:
// 0 ≤ a < matrix.length.

// [input] integer bA non-negative integer less than the number of matrix columns.
// Constraints:
// 0 ≤ b < matrix[i].length.

// [output] integer

function crossingSum(matrix, a, b) {

	var rowSum = 0;
	var colSum = 0;

	matrix.forEach(function(ele, i, arr) {
		if (i === a) {
			// console.log(ele);
			colSum += ele.reduce(function(a,b) {return a+b});
		} else {
			// console.log(ele[b]);
			colSum += ele[b];
		}
	})

	return rowSum + colSum;
}

console.log(crossingSum(matrix1, 1, 3));