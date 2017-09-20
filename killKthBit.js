function killKthBit(n, k) {
  nBinary = n.toString(2).split("");
  if (nBinary[k] === "1") {
  	nBinary[k] = "0";
  }
  return parseInt(nBinary.join(""), 2);
}

var restult = killKthBit(37, 3);
console.log(restult);