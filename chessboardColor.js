function chessBoardCellColor(cell1, cell2) {
    
    var cell1Split = cell1.split("");
    var cell2Split = cell2.split("");

    var alphabet = "ABCDEFGH".split("");
	var nums = "12345678".split("");
    
    var cell1total = isEven(alphabet.indexOf(cell1Split[0]) + nums.indexOf(cell1Split[1]));
    var cell2total = isEven(alphabet.indexOf(cell2Split[0]) + nums.indexOf(cell2Split[1]));
    
    return (cell1total === cell2total)
    
    
}

function isEven(num) {
    return num % 2 === 0;
}

chessBoardCellColor("A1", "H3");