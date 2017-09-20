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


function main() {
    var numTests = parseInt(readLine());

    for (var i = 0; i < numTests; i++) {
    	var currentString = readLine();

    	//get length of string and produce matching substrings(is there a middle character or does it split evenly?)
    	if (currentString.length % 2 === 0) {
    		var substringA = currentString.substring(0, currentString.length/2);
    		var substringB = currentString.substring(currentString.length/2);
    	} else {
    		var substringA = currentString.substring(0, (currentString.length - 1)/2);
    		var substringB = currentString.substring((currentString.length - 1)/2 + 1);
    	}

    	//reverse substringB
    	substringB = substringB.split("").reverse();
    	substringB = substringB.join("");

    	//count absolute difference in ASCII codes to count shifts necessary
    	var shiftCount = 0;

    	for (var j = 0; j < substringA.length; j++) {
    		var charA = substringA.charCodeAt(j);
    		var charB = substringB.charCodeAt(j);
    		shiftCount += Math.abs(charA - charB);
    	}

    	console.log(shiftCount);

    }


}