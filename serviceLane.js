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

// get min of subArray of highway
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

//determine maxFit for segmet of highway
function doesItFit(entry, exit, highway) {
    testHighway = highway.slice(entry, exit+1);
    return getMinOfArray(testHighway);
}


function main() {

    //Create highway dimensions from input. Collect number of tests from input. 
    var temp1 = readLine().split(' ').map(Number);
    var lenHighway = temp1[0];
    var numTests = temp1[1];

    var widthHighway = readLine().split(' ').map(Number);
    
    //Map tests to result using helper function doesItFit();
    for (var i = 0; i < numTests; i++) {
        var temp2 = readLine().split(' ').map(Number);
        var entry = temp2[0];
        var exit = temp2[1];
        console.log(doesItFit(entry, exit, widthHighway));
    }

}