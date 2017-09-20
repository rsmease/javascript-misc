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
///

function main() {
    var S = readLine();

    var damagedSignalCount = 0;

    //loop through string in sets of three, seeking S, O and S at appropriate relative subindex within three positions
    for (var i = 0; i < S.length; i += 3) {
    	if (S.charAt(i) !== "S") {
    		damagedSignalCount += 1;
    	}
    	if (S.charAt(i+1) !== "O") {
    		damagedSignalCount += 1;
    	}
    	if (S.charAt(i+2) !== "S") {
    		damagedSignalCount += 1;
    	}
    }

    //print total variance
    console.log(damagedSignalCount);

}