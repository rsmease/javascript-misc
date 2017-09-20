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

	var lenArr = parseInt(readLine());
	var arrUnsorted = readLine().split(" ").map(Number);
	var pivot = arrUnsorted[0];

	var leftArr = [];
	var pivotArr = [];
	var rightArr = [];

	arrUnsorted.forEach(function(ele, i, arr) {
		if (ele < pivot) {
			leftArr.push(ele);
		} else if (ele > pivot) {
			rightArr.push(ele);
		} else {
			pivotArr.push(ele);
		}
	})

	console.log(leftArr.join(" ") + " " + pivotArr.join(" ") + " " + rightArr.join(" "));

}