function minesweeper(matrix) {
    var numMatrix = matrix.slice(0);
    for (var i = 0; i < matrix.length; i++) {
    	for (var j = 0; j < matrix[0].length; j++) {

    		if (matrix[i-1] !== undefined) {
    			var topLeft = matrix[i-1][j-1];
    			var top = matrix[i-1][j];
    			var topRight = matrix[i-1][j+1];
    		} else {
    			var topLeft = false;
    			var top = false;
    			var topRight = false;
    		}

    		if (matrix[i+1] !== undefined) {
    			var bottomLeft = matrix[i+1][j-1];
    			var bottom = matrix[i+1][j];
    			var bottomRight = matrix[i+1][j+1];
    		} else {
    			var bottomLeft = false;
    			var bottom = false;
    			var bottomRight = false;
    		}

    		var left = matrix[i][j-1];
    		var right = matrix[i][j+1];

    		if (matrix[i][j] === true) {
    			numMatrix[i][j] = 1;
    			console.log("TEST")
    		} else {
    			numMatrix[i][j] = 0;
    			if (topLeft === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST topLeft")
    				}
    				numMatrix[i][j]++;
    			}
    			if (top === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST top")
    				}
    				numMatrix[i][j]++;
    			}
    			if (topLeft === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST topLeft")
    				}
    				numMatrix[i][j]++;
    			}
    			if (left === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST left")
    				}
    				numMatrix[i][j]++;
    			}
    			if (right === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST right")
    				}
    				numMatrix[i][j]++;
    			}
    			if (bottomRight === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST bottomRight")
    				}
    				numMatrix[i][j]++
    			}
    			if (bottom === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST")
    				}
    				numMatrix[i][j]++
    			}
    			if (bottomLeft === true) {
    				if (i === 0 && j === 1) {
    					console.log("TEST bottomLeft")
    				}
    				numMatrix[i][j]++
    			}
    		}
    	}
	}
    return numMatrix;
}

var matrix1 = [[true, false, false],
          [false, true, false],
          [false, false, false]];


console.log(minesweeper(matrix1));