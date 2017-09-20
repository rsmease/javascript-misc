//failed

function triangleType(a, b, c){
  var angles = getAngles([a, b, c])
  if (Math.max(angles) >= 180 || angleSum(angles) != 360) {
    return 0;
  } else if (angles.includes(90)) {
    return 2;
  } else if (angles.filter(a => a < 90).length === 3) {
    return 1;
  } else {
    return 3;
  }
}

function getAngles(arr) {
  var angleA = Math.acos((arr[0]*arr[0] + arr[1]*arr[1] - arr[2]*arr[2]) / 2 * arr[0] * arr[1])
  var angleB = Math.acos((arr[1]*arr[1] + arr[2]*arr[2] - arr[0]*arr[0]) / 2 * arr[1] * arr[2])
  var angleC = Math.acos((arr[2]*arr[2] + arr[0]*arr[0] - arr[1]*arr[1]) / 2 * arr[2] * arr[0])
  return [angleA, angleB, angleC]
}

function angleSum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(getAngles([7, 3, 2]))
