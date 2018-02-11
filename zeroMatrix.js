'use strict';

const zeroMatrix = function(numMatrix) {
  //Space(n)
  const targetCols = new Set();
  const targetRows = new Set();

  //O(n)
  for (let i = 0; i < numMatrix[0].length; i++) {
    for (let j = 0; j < numMatrix.length; j++) {
      let curr = numMatrix[i][j];
      if (curr === 0) {
        //O(1);
        targetCols.add(i);
        targetRows.add(j);
      }
    }
  }

  //O(n)
  for (let i = 0; i < numMatrix[0].length; i++) {
    for (let j = 0; j < numMatrix.length; j++) {
      if (targetCols.has(i) || targetRows.has(j)) {
        //O(1)
        numMatrix[i][j] = 0;
      }
    }
  }

  return numMatrix;
};

// let test = [[0, 1, 1], [1, 1, 0], [1, 1, 1]];
// console.log(zeroMatrix(test).join('\n'));
