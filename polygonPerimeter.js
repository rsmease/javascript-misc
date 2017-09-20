function polygonPerimeter(matrix) {
	perimeterSum = 0;

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[0].length; j++) {

			var currentCell = matrix[i][j];
			if (currentCell) {

				var possiblePerimeter = 4;

				if (i > 0) {
					// var topLeft = matrix[i-1][j-1];
					var top = matrix[i-1][j];
					// var topRight = matrix[i-1][j+1]
				} else {
					// var topLeft = false;
					var top = false;
					// var topRight = false;
				}

				if (i < matrix.length - 1) {
					// var bottomLeft = matrix[i+1][j-1];
					var bottom = matrix[i+1][j];
					// var bottomRight = matrix[i+1][j+1];
				} else {
					// var bottomLeft = false;
					var bottom = false;
					// var bottomRight = false;
				}

				var left = matrix[i][j-1];
				var right = matrix[i][j+1];

				// if (topLeft === true) {
				// 	possiblePerimeter--;
				// }
				if (top === true) {
					possiblePerimeter--;
				}
				// if (topRight === true) {
				// 	possiblePerimeter--;
				// }
				if (left === true) {
					possiblePerimeter--;
				}
				if (right === true) {
					possiblePerimeter--;
				}
				// if (bottomLeft === true) {
				// 	possiblePerimeter--;
				// }
				if (bottom === true) {
					possiblePerimeter--;
				}
				// if (bottomRight === true) {
				// 	possiblePerimeter--;
				// }

				perimeterSum+= possiblePerimeter;

			}

		}
	}

	return perimeterSum;   
}

var polygon1 = [[false, true,  true ],
          [true,  true,  false],
          [true,  false, false]]

console.log(polygonPerimeter(polygon1));
