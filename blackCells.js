function countBlackCells(n, m) {
	if (n === m) {
		return 3 * (n - 2) + 4;
	} else {
		return (n + m) - GCM(n, m) + (GCM(m,n) - 1) * 2;
	}
}

function GCM(n, m) {
	var min = Math.min(n, m);
	for (var i = min; i > 0; i--) {
		if (n % i === 0 && m % i === 0) {
			return i;
		}
	}
}

console.log(countBlackCells(3, 4));