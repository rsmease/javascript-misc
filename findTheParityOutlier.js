function findOutlier(integers){
  odds = integers.filter(function(number) {
    return isOdd(number);
  })
  if (odds.length === 1) {
    return odds[0]
  } else {
    evens = integers.filter(function(number) {
      return !(isOdd(number))
    })
    return evens[0]
  }
}

function isOdd(number) {
  return number % 2 != 0
}
