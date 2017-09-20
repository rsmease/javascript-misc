function mirrorBits(a) {
	bitA = a.toString(2).split("").map(Number);
	bitAReversed = bitA.reverse().join("");
	bitAReversed = parseInt(bitAReversed, 2);
	return bitAReversed;

}

console.log(mirrorBits(97))