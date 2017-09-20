function processData(input) {
    splitInput = input.split("\n")
    p = parseInt(splitInput[0]);
    q = parseInt(splitInput[1]);

    results = gatherKaprekars(p, q);

    if (results.length > 0) {
    	console.log(results.join(" "));
    } else {
    	console.log("INVALID RANGE")
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

var kaprekarNums = "1, 9, 45, 55, 99, 297, 703, 999, 2223, 2728, 4950, 5050, 7272, 7777, 9999, 17344, 22222, 77778, 82656, 95121, 99999, 142857, 148149, 181819, 187110, 208495, 318682, 329967, 351352, 356643, 390313, 461539, 466830, 499500, 500500, 533170, 538461, 609687, 643357, 648648, 670033, 681318, 791505, 812890, 818181, 851851, 857143, 961038, 994708, 999999"

kaprekarNums = kaprekarNums.split(", ")

function gatherKaprekars(p, q) {
	validKaprekars = []
	for (var i = 0; i < kaprekarNums.length; i++) {
		if (p <= kaprekarNums[i] && kaprekarNums[i] <= q) {
			validKaprekars.push(kaprekarNums[i]);
		}
	}
	return validKaprekars;
}