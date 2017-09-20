function fourPiles(n,y){
	for (var i = 0; i < n; i++) {
		var pileSumArr = [i+y, i-y, i*y, i/y]
		if (pileSumArr.reduce(function(a, b) {return a+ b}) === n) {
			console.log(i)
			console.log(y)
			if (pileSumArr.indexOf(0) === -1) {
				return pileSumArr;
			}
		}
	}
	//specified failure response
	return []
}

console.log(fourPiles(25, 4))