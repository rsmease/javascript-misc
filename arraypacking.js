function arrayPacking(a) {
	var s = [];
	a.forEach(function(ele, i, arr) {
		var subS = ele.toString(2);
		while (subS.length < 8) {
			subS = "0" + subS;
		}
		console.log(subS);
		s.unshift(subS);
		// console.log(s);
	})
	s = s.join("");
	console.log(s);
	return parseInt(s);
}

var result = arrayPacking([24, 85, 0]);
console.log(result);