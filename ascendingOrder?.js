function inAscOrder(arr) {
  var copy = arr.slice();
  var arrSorted = copy.sort(function(a,b) {return a - b})
  return arrSorted.join("") === arr.join("")
}
