function strongEnough(earthquake, age) {
	var earthquakeStrength = earthquake.map(function(shockwave) {return shockwave.reduce(function(a, b) {return a + b})}).reduce(function(a, b) {return a * b});

	var buildingStrength = 1000;
	for (var i = 0; i < age; i++) {
		buildingStrength *= 0.99;
	}

	if (earthquakeStrength <= buildingStrength) {
		return "Safe!"
	} else {
		return "Needs Reinforcement!"
	}
}

//here with the shortcut for the power function
//function strongEnough(earthquake, age){
//   earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
//   var strength = 1000 * Math.pow(.99, age);
//   return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
// }

strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2)