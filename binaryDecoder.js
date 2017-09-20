function binToASCII(bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
      return String.fromCharCode(parseInt(bin, 2))
    })
}

function messageFromBinaryCode(code) {
	var decoded = "";
	for (var i = 0; i < code.length; i += 8) {
		var currentBinary = code.substring(i, i+8);
		var currentASCII = binToASCII(currentBinary);
		decoded += currentASCII;
	}
	return decoded;
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"))