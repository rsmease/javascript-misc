const rotateMatrix = function(pixelArray) {
  for (let i = 0; i < pixelArray[0].length; i++) {
    for (let j = i + 1; j < pixelArray.length; j++) {
      let temp = pixelArray[i][j];
      pixelArray[i][j] = pixelArray[j][i];
      pixelArray[j][i] = temp;
    }
  }
  return pixelArray.map((row) => row.reverse());
};

// let test = [[1, 2], [3, 4]];
// console.log(rotateMatrix(test));

const rotateMatrixCounterClockWise = function(pixelArray) {
  for (let i = 0; i < pixelArray[0].length; i++) {
    for (let j = i + 1; j < pixelArray.length; j++) {
      let temp = pixelArray[i][j];
      pixelArray[i][j] = pixelArray[j][i];
      pixelArray[j][i] = temp;
    }
  }
  return pixelArray.reverse();
};

let test = [[0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
console.log(rotateMatrix(test));
