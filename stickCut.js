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

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function main() {
    var numSticks = parseInt(readLine());
    stickArr = readLine().split(' ');
    stickArr = stickArr.map(Number);
    // console.log(stickArr);
    var x = 0;

    stickArr.sort(function(a, b) {
  		return a - b;
	});

    // console.log(stickArr);
    var lastNum = 0;

    stickArr.forEach(function(ele, i, arr) {
    	var nextNum = stickArr[i];
    	if (nextNum !== lastNum) {
    		console.log(stickArr.length - i);
    		lastNum = nextNum;
    	}

    })


}