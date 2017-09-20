// function divisors(integer) {
//
//   divisorList = [];
//   for (i = 2; i < integer; i++) {
//     if (integer % i === 0) {
//       divisorList.push(i);
//     }
//   }
//
//   if (divisorList.length === 0) {
//     return integer.toString() + " is prime";
//   } else {
//     return divisorList;
//   }
//
// };

//clever alternative
function divisors(integer) {
  var result = []
  for (var i = 2; i <= Math.floor(integer / 2); i++) {
    if (integer % i === 0) { result.push(i); };
  }
  return result.length? result : integer + ' is prime'
};
