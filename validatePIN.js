function validatePIN (pin) {
	if (pin.length !== 4 && pin.length !== 6) {
		return false;
	}
	for (var i = 0; i < pin.length; i++) {
		// console.log(parseInt(pin.charAt(i)))
		if (!(isNum(pin.charAt(i)))) {
			return false;
		}
	}
	return true;
}

function isNum(char) {
	return "0123456789".split("").indexOf(char) > -1;
}

var test1 = "1234"
var test2 = "12345"
var test3 = "123a"

console.log(validatePIN(test3))

//much nicer
//function validatePIN (pin) {
//   return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
// }

