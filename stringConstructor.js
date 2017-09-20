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
    for(var a0 = 0; a0 < numTests; a0++){
        var string = readLine().split("");
        var stringSet = new Set(string);

        console.log(stringSet.size)
    }

}