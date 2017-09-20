//failed
var bandCodes = {"black": 0, "brown": 1, "red": 2, "orange": 3, "yellow": 4, "green": 5, "blue": 6, "violet": 7, "gray": 8, "white": 9}

function decodeResistorColors(bands) {
	var bandsSplit = bands.split(" ")
	var totalResistance = bandCodes[bandsSplit[0]]*10 + bandCodes[bandsSplit[1]] + Math.pow(10, bandCodes[bandsSplit[2]]);
	var tolerance = 20;
	if (bandsSplit.length === 4) {
		if (bandsSplit[3] === "gold") {
			tolerance = 5;
		} else {
			tolerance = 10;
		}
	}
	return String(totalResistance) + " ohms, " + String(tolerance) + "%"
}