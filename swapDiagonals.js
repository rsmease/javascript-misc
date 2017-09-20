// Description:

// Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

// Example

// For

matrix1 = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
// the output should be

// swapDiagonals(matrix) = [[3, 2, 1],
//                          [4, 5, 6],
//                          [9, 8, 7]]
// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer matrix
// Constraints:
// 1 ≤ matrix.length ≤ 10,
// matrix.length = matrix[i].length,
// 1 ≤ matrix[i][j] ≤ 1000.

// [output] array.array.integer
// Matrix with swapped diagonals.
// 
function swapDiagonals(matrix) {
	var firstRow = [swapRow(matrix[0])];
	var lastRow = swapRow(matrix[matrix.length - 1]);

	for (var i = 1; i < matrix.length - 1; i++) {
		firstRow.push(matrix[i]);
	}
	firstRow.push(lastRow);
	return firstRow;


}

function swapRow(row) {
	var firstIndex = [row[row.length - 1]];
	var lastIndex = row[0];

	for (var i = 1; i < row.length - 1; i++) {
		firstIndex.push(row[i]);
	}
	firstIndex.push(lastIndex);
	return firstIndex;
}

console.log(swapDiagonals(matrix1))