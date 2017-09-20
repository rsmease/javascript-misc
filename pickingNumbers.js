process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function pickNumbers(a) {
	var counts = {};
	a.forEach(function(ele, i, arr) {
		if (!(counts[ele])) {
			counts[ele] = 1;
		} else {
			counts[ele]++;
		}
	})

	var newSet = new Set(a);
	var highestCount = 0;
	// console.log(counts);

	newSet.forEach(function(ele, i, arr) {

		var resultVal = 2;

		var eleCount = counts[ele];

		if (eleCount > highestCount) {
			highestCount = eleCount;
		}

		if (newSet.size === 1) {
			highestCount = 100;
		}

		var higherEleCount = counts[ele+1];
		var lowerEleCount = counts[ele-1];

		if (higherEleCount > lowerEleCount) {
			resultVal = eleCount + higherEleCount;
		} else {
			resultVal = eleCount + lowerEleCount;
		}

		if (resultVal > highestCount) {
			
			highestCount = resultVal;
		}

	})

	return highestCount;

}

function main() {
    var n = parseInt(readLine());
    var a = readLine().split(' ');
    a = a.map(Number);
    var result = pickNumbers(a);
    console.log(result);

}