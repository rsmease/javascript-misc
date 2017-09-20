
//find and remove duplicates from the strings, returning to the beginning to reprocess string when a duplicate is found
function removeDupes(string) {
	for (var i = 1; i < string.length; i++) {
		if (string.charAt(i) === string.charAt(i-1)) {
			string = string.substring(0, i-1) + string.substring(i+1);
			i = 0;
		}
	}
	return string;
}

function processData(input) {
    stringWithoutDupes = removeDupes(input);
    if (stringWithoutDupes.length === 0) {
    	console.log("Empty String")
    } else {
    	console.log(stringWithoutDupes);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
