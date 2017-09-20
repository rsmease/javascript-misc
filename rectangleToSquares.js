//FAILEDd

function sqInRect(l, w){
  if (l === w) {
    return null;
  }

  var totalArea = l * w;
  var squaresMade = [];
  var availableSquares = allSquares(l, w).reverse();


  while (totalArea > 0) {
    console.log(totalArea);
    for (var i = 0; i < availableSquares.length; i++) {
      var currentSquare = availableSquares[i];
      if (currentSquare <= totalArea) {
        squaresMade.push(Math.sqrt(currentSquare));
        totalArea -= currentSquare;
        break;
      }
    }
  }

  return squaresMade;
}

function allSquares(l, w) {
  squares = [];
  for (var i = 1; i <= Math.pow(Math.min(l, w), 2); i++) {
    if (isSquare(i)) { squares.push(i) };
  }
  return squares;
}

function isSquare(n) {
  var base = Math.sqrt(n);
  return base === Math.floor(base);
}

console.log(sqInRect(20, 14))
