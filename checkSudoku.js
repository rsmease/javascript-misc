function sudoku(grid) {
	var checkGridRows = checkRows(grid);
	var checkGridCols = checkCols(grid);
	console.log(grid);
	var checkGridSubgrids = checkSubgrids(grid);
	return checkGridRows && checkGridCols && checkGridSubgrids;
}

function checkRows(grid) {
	var numRows = grid.length;
	var copy1 = grid.slice(0);
	for (var i = 0; i < numRows; i++) {
		var currentRow = copy1[i].sort(function(a, b) {return a - b});
		if (currentRow.toString() !== testSubset) {
			console.log("CHECK ROWS FAIL");
			console.log(currentRow);
			return false; 
		}
	}
	console.log("CHECK ROWS PASS");
	return true; 
}

function checkCols(grid) {
	var numCols = grid[0].length;
    var numRows = grid.length;
    var copy2 = grid.slice(0); 
	for (var i = 0; i < numCols; i++) {
		var currentCol = [];
		for (var j = 0; j < numRows; j++) {
			var currentCell = copy2[i][j];
			currentCol.push(currentCell);
		}
		currentCol = currentCol.sort(function(a, b) {return a - b});
		if (currentCol.toString() !== testSubset) {
			console.log("CHECK COLS FAIL");
			console.log(currentCol);
			return false;
		}
	}
	console.log("CHECK COLS PASS");
	return true; 
}

function checkSubgrids(grid) {
	var numCols = grid[0].length;
    var numRows = grid.length;
    var checkSubSet = [];
    
    for (var i = 0; i < numCols; i+= 3) {
    	for (var j = 0; j < numRows; j+= 3) {
    		checkSubSet.push(grid[j].slice(i, i+3).concat(grid[j+1].slice(i, i+3), grid[j+2].slice(i, i+3)));
    	}
    }
    // console.log(checkSubSet);
    for (var k = 0; k < checkSubSet.length; k++) {
    	var currentSubgrid = checkSubSet[k].sort(function(a,b) {return a - b});
    	if (currentSubgrid.toString() !== testSubset) {
    		console.log(currentSubgrid);
    		return false;
    	}
    }
    return true; 
}

var testSubset = [1, 2, 3, 4, 5, 6, 7, 8, 9].toString();

var testGrid =  [[5,3,4,6,7,8,9,1,2], 
 [6,7,2,1,9,5,3,4,8], 
 [1,9,8,3,4,2,5,6,7], 
 [8,5,9,7,6,1,4,2,3], 
 [4,2,6,8,5,3,7,9,1], 
 [7,1,3,9,2,4,8,5,6], 
 [9,6,1,5,3,7,2,8,4], 
 [2,8,7,4,1,9,6,3,5], 
 [3,4,5,2,8,6,1,7,9]];

 console.log(sudoku(testGrid));


// var correctSubsetObject = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1};

// function isCorrect(subset) {
// 	var testSubset = correctSubsetObject;
// 	subset.forEach(function(ele, i, arr) {
// 		if (testSubset[ele] = 1) {
// 			testSubset[ele]--
// 		}
// 	})
// 	var testSum = 0;
// 	for (key in testSubset) {
// 		testSum += testSubset[key];
// 	}
// 	return testSum === 0;
// }
