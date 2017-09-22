//Accumulate characters (char => charFrequency == i+1)
//Return characters joined by '-'

//refactored Fri Sept 22 2017

function accumulateChars(s) {

	var accumulatedString = s.split("").map(function(ele, i) {
		return ele.toUpperCase() + ele.toLowerCase().repeat(i);
	});

	return accumulatedString.join("-");

}

console.log(accumulateChars("Happy"))
