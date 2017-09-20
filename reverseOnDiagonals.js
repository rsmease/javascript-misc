// Description:

// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// Example

// For

matrix1 = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
// the output should be

// reverseOnDiagonals(matrix) = [[9, 2, 7],
//                               [4, 5, 6],
//                               [3, 8, 1]]
// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer matrix
// Constraints:
// 1 ≤ matrix.length ≤ 10,
// matrix.length = matrix[i].length,
// 1 ≤ matrix[i][j] ≤ 1000.

// [output] array.array.integer
// Matrix with the order of elements on its longest diagonals reversed.
// 
function reverseOnDiagonals(matrix) {
	var firstRow = matrix[0];
	var lastRow = matrix[matrix.length - 1];

	var firstRowReversed = [lastRow[lastRow.length - 1]].concat(firstRow.slice(1, firstRow.length - 1), lastRow[0]);
	var lastRowReversed = [firstRow[firstRow.length - 1]].concat(lastRow.slice(1, lastRow.length - 1), firstRow[0]);

	var result = [firstRowReversed];
	for (var i = 1; i < matrix.length - 1; i++) {
		result.push(matrix[i]);
	}
	result.push(lastRowReversed);
	return result;
}

console.log(reverseOnDiagonals(matrix1));