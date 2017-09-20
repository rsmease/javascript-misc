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

function main() {
	var stringA = readLine().split("");
	var stringB = readLine().split("");

	var dictA = {}

	//find occurence of all char in string a
	stringA.forEach(function(ele, i, arr) {
		var currentChar = ele;
		if (currentChar in dictA) {
			dictA[currentChar]++;
		} else {
			dictA[currentChar] = 1;
		}
	})

	//compare occurence of all char in string b
	stringB.forEach(function(ele, i, arr) {
		var currentChar = ele;
		if (currentChar in dictA) {
			dictA[currentChar]--;
		} else {
			dictA[currentChar] = -1;
		}
	})

	//count variance (equivalent to deletion count)
	var varianceSum = 0;
	for (key in dictA) {
		varianceSum += Math.abs(dictA[key]);
	}

	console.log(varianceSum);


}