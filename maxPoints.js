function maxPoints(elements) {
  //we will use this to determine the total for each element
  //keep elements where the sum of element >= sum of adjacent elements combined
  const pointTotals = {};

  //data structure we will build to use while deleting points
  //equivalent to Object.keys(pointTotals)
  const foundPoints = [];

  //build helpers
  for (let i = 0; i < elements.length; i++) {
    let curr = elements[i];
    if (pointTotals[curr]) {
      pointTotals[curr] += curr;
    } else {
      foundPoints.push(curr);
      pointTotals[curr] = curr;
    }
  }

  //use flag to loop through pointTotals using foundPoints
  //keep deleting until no adjacent elements remain
  let flag = true;
  while (flag) {
    flag = false;
    for (let j = 0; j < foundPoints.length; j++) {
      let curr = foundPoints[j];
      if (!pointTotals[curr - 1] && !pointTotals[curr + 1]) {
        continue;
      } else {
        //we have to do this so that we don't try to compare 0 with undefined
        //another solution would be to build an object using a Proxy so that the default value is 0
        if (!pointTotals[curr - 1]) {
          pointTotals[curr - 1] = 0;
        }
        if (!pointTotals[curr + 1]) {
          pointTotals[curr + 1] = 0;
        }
        //if we're in this part of the loop, one or more adjacent elements was found
        //set flag to repeat loop
        //delete appropriate element total by setting it to 0
        if (
          pointTotals[curr] >=
          pointTotals[curr - 1] + pointTotals[curr + 1]
        ) {
          delete pointTotals[curr - 1];
          delete pointTotals[curr + 1];
          flag = true;
        }
      }
    }
  }
  return getObjectValues(pointTotals).reduce((x, y) => x + y);
}

//This was hacked together because HackerRank is running something older than ES8;
//Object.values() threw a RuntimeError
function getObjectValues(object) {
  const objectKeys = Object.keys(object);
  const objectVals = [];
  for (let k = 0; k < objectKeys.length; k++) {
    objectVals.push(object[objectKeys[k]]);
  }
  return objectVals;
}

let test = [3, 3, 4, 2];
let result = maxPoints(test);
console.log(result);
