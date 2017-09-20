function goodVsEvil(good, evil){
  var goodVals = [1, 2, 3, 3, 4, 10]
  var evilVals = [1, 2, 2, 2, 3, 5, 10]

  var goodTotal = returnTotal(good, goodVals);
  var evilTotal = returnTotal(evil, evilVals);

  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodTotal < evilTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }

}

function returnTotal(str, vals) {
  var strNums = str.split(" ").map(num => parseInt(num));
  var totalVals = strNums.map(function(ele, i) {
    return ele * vals[i];
  })
  return totalVals.reduce((a, b) => a + b)
}


// Return ""Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
