//returns positions of all letters in string
//refactored for ES6, Sep 25 17
function alphabet_position(text) {
	var alphabet = [ ..."abcdefghijklmnopqrstuvwxyz" ]
	var alphaArr = getAlphaArr(text.toLowerCase());
	return alphaArr.map(ele => alphabet.indexOf(ele) + 1);
}

function getAlphaArr(text) {
	return text.split("").filter(ele => /[A-Za-z]/.test(ele));
}

console.log(alphabet_position("The sunset sets at twelve o' clock."))
