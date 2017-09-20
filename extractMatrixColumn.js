// Description:

// Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0thone).

// Example

// For

var matrix1 = [[1, 1, 1, 2], 
          [0, 5, 0, 4], 
          [2, 1, 3, 6]]
// and column = 2, the output should be
// extractMatrixColumn(matrix, column) = [1, 0, 3].

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer matrix
// 2-dimensional array of integers representing a rectangular matrix.

// Constraints:
// 1 ≤ matrix.length ≤ 4,
// 1 ≤ matrix[0].length ≤ 4,
// 0 ≤ matrix[i][j] ≤ 300.

// [input] integer column
// An integer not greater than the number of matrix columns.

// Constraints:
// 0 ≤ column ≤ matrix[i].length - 1.

// [output] array.integer
// 
function extractMatrixColumn(matrix, column) {
	var result = [];
	matrix.forEach(function(ele) {
		result.push(ele[column]);
	})
	return result;
}

console.log(extractMatrixColumn(matrix1, 2))