function differentSquares(matrix) {
	var squares = seekSquares(matrix);
	var stringSquares = [];
	squares.forEach(function(ele, i, arr) {
		stringSquares.push(ele.toString());
	})
	var squareSet = new Set(stringSquares);
	console.log(squareSet);
	return squareSet.size;
}

function seekSquares(matrix) {
	var COLS = matrix[0].length;
	var ROWS = matrix.length;

	var foundSquares = [];
	for (var i = 0; i < ROWS - 1; i++) {
		for (var j = 0; j < COLS - 1; j++) {
			var currentSquare = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]];
			foundSquares.push(currentSquare);
		}
	}
	return foundSquares;
}

var myMatrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]

console.log(differentSquares(myMatrix));