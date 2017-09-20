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

    var numClouds = parseInt(readLine());
    var clouds = readLine().split(' ');
    clouds = clouds.map(Number);

    var jumpCount = -1;

    var i = 0;
    while (i < clouds.length) {
    	if (clouds[i+2] === 0) {
    		jumpCount++;
    		i+= 2;
    	} else {
    		jumpCount++;
    		i++;
    	}
    }

    console.log(jumpCount);

}