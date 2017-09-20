function chessKnightMoves(cell) {

	var positions = cell.split("");
	var alpha = "abcdefgh".split("");
	var nums = "12345678".split("");
	var knightHorizonalPosition = alpha.indexOf(positions[0]);
	var knightVerticalPosition = nums.indexOf(positions[1]);

	console.log(knightHorizonalPosition, knightVerticalPosition);

	var possibleMoves = 0;

	if (knightHorizonalPosition === 0 || knightHorizonalPosition === 7) {
		if (knightVerticalPosition === 0 || knightVerticalPosition === 7) {
			possibleMoves = 2;
		} else if (knightVerticalPosition === 1 || knightVerticalPosition === 6) {
			possibleMoves = 3;
		} else {
			possibleMoves = 4;
		}
	} else if (knightHorizonalPosition === 1 || knightHorizonalPosition === 6) {
		if (knightVerticalPosition === 0 || knightVerticalPosition === 7) {
			possibleMoves = 3;
		} else if (knightVerticalPosition === 1 || knightVerticalPosition === 6) {
			possibleMoves = 4;
		} else {
			possibleMoves = 6;
		}
	} else {
		if (knightVerticalPosition === 0 || knightVerticalPosition === 8) {
			possibleMoves = 4;
		} else if (knightVerticalPosition === 1 || knightVerticalPosition === 7) {
			possibleMoves = 6;
		} else {
			possibleMoves = 8;
		}
	}
	return possibleMoves;
}

console.log(chessKnightMoves("c2"))


var alpha = "abcdefgh".split("");
var nums = "12345678".split("");
