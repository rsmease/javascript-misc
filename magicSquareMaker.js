function processData(input) {
    var matrix = input.split("\n");
    for (var row = 0; row < matrix.length; row++) {
    	// console.log(matrix[row]);
    	matrix[row] = matrix[row].split(" ");
    	matrix[row] = matrix[row].map(Number);
    }

    // console.log(matrix);
    // var totals = [];
    // matrix.forEach(function(ele, i, arr) {
    // 	var total = 0;
    // 	allPossibleMagic.forEach(function(ele, j, arr) {
    // 		if (!(matrix[i][j] === allPossibleMagic[i][j])) {
    // 			total += Math.max(matrix[i][j], allPossibleMagic[i][j]) - Math.min(matrix[i][j], allPossibleMagic[i][j]);
    // 		}
    // 	})
    // 	totals.push(total);
    // })
    // 
    var totals = [];

    for (var k = 0; k < allPossibleMagic.length; k++) {
    	var nextTestMagic = allPossibleMagic[k];
    	var total = 0;
    	for (var i = 0; i < matrix.length; i++) {
    		for (var j = 0; j < matrix[i].length; j++){
				if (!(nextTestMagic[i][j] === matrix[i][j])) {
					total += (Math.max(nextTestMagic[i][j], matrix[i][j]) - Math.min(nextTestMagic[i][j], matrix[i][j]))
				}
    		}
    	}
    	totals.push(total);
    }
    
    console.log(getMinOfArray(totals));
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

var allPossibleMagic = [[[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]]

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

