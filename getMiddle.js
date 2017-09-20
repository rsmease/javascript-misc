function getMiddle(s) {
	if (isEven(s)) {
		return s.substring((s.length / 2) - 1, (s.length / 2) + 1);
	} else {
		return s.substring(s.length / 2, (s.length / 2) + 1);
	}
}

function isEven(s) {
	return s.length % 2 === 0
}

console.log(getMiddle("Ryan"))