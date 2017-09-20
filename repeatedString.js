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

function countAs(string) {
	var aCount = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === "a") {
			aCount++;
		}
	}
	return aCount;
}

function main() {

    var myString = readLine();
    myString.toLowerCase();

    var testLength = parseInt(readLine());

    var numX = Math.floor(testLength / myString.length);
    var remainderLength = testLength % myString.length;

    // console.log(remainderLength);

    if (remainderLength > 0) {
    	var result = (countAs(myString) * numX) + countAs(myString.substring(0, remainderLength));
    } else {
    	var result = (countAs(myString) * numX)
    }

    console.log(result);

}