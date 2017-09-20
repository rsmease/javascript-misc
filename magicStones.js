function isEven(num) {
	return (num % 2 === 0);
}

function sortNumber(a,b) {
    return a - b;
}

function processData(input) {
    var splitInput = input.split("\n").map(Number);
    console.log(splitInput);
    var numTests = splitInput[0];
    for (i = 1; i < splitInput.length; i += 3) {
    	var numStones = splitInput[i];
    	var diffA = splitInput[i+1];
    	var diffB = splitInput[i+2];

    	var outcomeArr = [];
    	var numSteps = numStones - 1;
    	if (isEven(numSteps)) {
    		outcomeArr.push(diffA*numSteps);
    		outcomeArr.push(diffB*numSteps);
    		outcomeArr.push(((diffA+diffB)/2)*numSteps);
    		outcomeArr.sort(sortNumber);
    		console.log(outcomeArr.join(" "));
    	} else {
    		outcomeArr.push(diffA*numSteps);
    		outcomeArr.push(diffB*numSteps);
    		
    		var lesserHalf = (numSteps - 1) / 2;

    		outcomeArr.push((diffA*lesserHalf)+(diffB*(lesserHalf+1)));
    		outcomeArr.push((diffB*lesserHalf)+(diffA*(lesserHalf+1)));

    		outcomeArr.sort(sortNumber);
    		console.log(outcomeArr.join(" "));
    	}
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
