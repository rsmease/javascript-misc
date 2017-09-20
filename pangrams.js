function processData(input) {

	//split input to iterate using indexOf
	//create status to note any undiscoverable character
	var lowerInput = input.toLowerCase();
	var splitInput = lowerInput.split("");
	var status = true;
    //loop through alphabet, seeing string;
    for (var i = 0; i < alphabet.length; i++) {
    	currentLetter = alphabet.charAt(i);
    	if (splitInput.indexOf(currentLetter) < 0) {
    		status = false;
    		break;
    	}
    }
    //output based on status
    if (status) {
    	console.log("pangram");
    } else {
    	console.log("not pangram");
    }

} 

//define all letters
var alphabet = "abcdefghijklmnopqrstuzwyz";

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});