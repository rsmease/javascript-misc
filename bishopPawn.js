function bishopAndPawn(bishop, pawn) {

	var bishopNumPosition = bishop.split("");
	bishopNumPosition[0] = alpha.indexOf(bishopNumPosition[0]);
	bishopNumPosition[1] = nums.indexOf(bishopNumPosition[1]);

	var pawnNumPosition = pawn.split("");
	pawnNumPosition[0] = alpha.indexOf(pawnNumPosition[0]);
	pawnNumPosition[1] = nums.indexOf(pawnNumPosition[1]);

	var positionVariance = [];
	positionVariance.push(Math.abs(pawnNumPosition[0] - bishopNumPosition[0]));
	positionVariance.push(Math.abs(pawnNumPosition[1] - bishopNumPosition[1]));

	console.log(positionVariance);
	return (positionVariance[0] > 0 && positionVariance[0] === positionVariance[1]);
}

var alpha = "abcdefgh".split("");
var nums = "12345678".split("");

console.log(bishopAndPawn("b2", "c3"));