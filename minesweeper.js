function minesweeper(matrix) {

	function isInRange

    var numMatrix = matrix.slice(0);
    for (var i = 0; i < matrix.length; i++) {
    	for (var j = 0; j < matrix[0].length; j++) {

    		var currentNum = 1;
    		
    		var topLeft = matrix[i-1][j];
    		var left = matrix[i][j-1];
    		var bottomLeft = matrix[i+1][j-1];
    		var top = matrix[i-1][j];
    		var topRight = matrix[i-1][j+1];
    		var right = matrix[i+1][j];
    		var bottomRight = matrix[i+1][j+1];
    		var bottom = matrix[i+1][j];

			currentNum += (topLeft + left + bottomLeft + top + topRight + right + bottomRight + bottom); 		

    		numMatrix[i][j] = currentNum;




    	}
    }
    return numMatrix;
}

function 
