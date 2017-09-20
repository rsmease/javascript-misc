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
    var s = readLine();
    var minGridArea = s.length;

    var rows = Math.floor(Math.sqrt(minGridArea));
    var cols = Math.ceil(Math.sqrt(minGridArea));

    s = s.split("");

    resultArr = [];

    for (var i = 0; i < cols; i++) {
    	ss = []
    	for (var j = 0; j < minGridArea; j += cols) {
    		ss.push(s[j+i]);
    	}
    	resultArr.push(ss.join(""));
    }

    console.log(resultArr.join(" "));


}