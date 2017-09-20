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

function tellTime(h, m) {
	if (m === 0) {
		console.log(onesAndTeens[h] + " o' clock")
	} else if (m < 30 && m > 0) {
		if (m == 1) {
			console.log(onesAndTeens[m] + " minute past " + onesAndTeens[h]);
		} else if (m < 20) {
			if (m === 15) {
				console.log("quarter past " + onesAndTeens[h]);
			} else {
				console.log(onesAndTeens[m] + " minutes past " + onesAndTeens[h]);
			}
		} else {
			console.log("twenty " + onesAndTeens[m%20] + " minutes past " + onesAndTeens[h]);
		}
	} else {
		if (m === 30) {
			console.log("half past " + onesAndTeens[h]);
		} else {
			var remainingMinutes = 60 - m;

			if (remainingMinutes === 1) {
				console.log(onesAndTeens[remainingMinutes] + " minute to " + onesAndTeens[h+1]);
			} else if (remainingMinutes < 20) {
				if (remainingMinutes === 15) {
					console.log("quarter to " + onesAndTeens[h+1]);
				} else {
					console.log(onesAndTeens[remainingMinutes] + " minutes to " + onesAndTeens[h+1]);
				}
			} else {
				console.log("twenty " + onesAndTeens[remainingMinutes%20] + " minutes to " + onesAndTeens[h+1]);
			}

		}
	}
}

function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    tellTime(h, m);

}

var onesAndTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

