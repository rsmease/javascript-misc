function isEven(num) {
	return (num % 2 === 0);
}

function sortNumber(a,b) {
    return a - b;
}

function processData(input) {
    var splitInput = input.split("\n").map(Number);
    // console.log(splitInput);
    var numTests = splitInput[0];
    for (i = 1; i < splitInput.length; i += 3) {
    	var numStones = splitInput[i];
    	var diffA = splitInput[i+1];
    	var diffB = splitInput[i+2];

        var numSteps = numStones - 1;
        var largestPossibleStepTotal = Math.max(diffA, diffB)*numSteps;

    	var outcomeArr = [];
    	for (num = 0; num <= numSteps; num++) {
            outcomeArr.push(diffA*(numSteps-num) + diffB*num)
        }
        outcomeArr.sort(sortNumber);
        var outcomeSet = new Set(outcomeArr);
        outcomeArr = Array.from(outcomeSet)
        console.log(outcomeArr.join(" "))
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