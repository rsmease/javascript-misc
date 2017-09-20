function cubeOdd(arr) {

	var checkNums = arr.filter(isNumber);
	sum = undefined;

	if (checkNums.length === arr.length) {
		var odds = arr.filter(isOdd)
		var cubed = odds.map(function(ele) {return ele*ele*ele});
		var sum = cubed.reduce(function(a, b) {return a + b})
	}

	return sum;
}

function isOdd(num) {
	return num % 2 !== 0;
}

function isNumber(ele) {
	return typeof ele === "number";
}


console.log(cubeOdd([1, 2, 3, 4]))
