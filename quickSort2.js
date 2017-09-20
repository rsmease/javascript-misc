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
	var result = quickSort(arrUnsorted);
	console.log(result);

}

function quickSort(arr) {

	if (arr.length < 2) {
		return arr;
	}
	var pivot = arr[0];

	var leftArr = [];
	var pivotArr = [];
	var rightArr = [];

	arr.forEach(function(ele, i, arr) {
		if (ele < pivot) {
			leftArr.push(ele);
		} else if (ele > pivot) {
			rightArr.push(ele);
		} else {
			pivotArr.push(ele);
		}
	})

	if (leftArr.length > 1) {
		leftArr2 = quickSort(leftArr);
		console.log(leftArr2.join(" "))
	}
	if (rightArr.length > 1) {
		rightArr2 = quickSort(rightArr);
		console.log(rightArr2.join(" "))
	}

	subArr = leftArr.join(" ") + " " + pivotArr + " " + rightArr.join(" ");

	if (subArr.length === arr.length) {
		return subArr;
	} else {
		return arr;
	}
}