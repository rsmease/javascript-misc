var countBits = function(n) {

  var bits = n.toString(2);
  bits = bits.split("").map(Number)

  var count = bits.reduce(function(a,b) { return a + b });
  return count

}
