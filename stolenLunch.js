function stolenLunch(note) {
	var decrypted = "";
	for (var i = 0; i < note.length; i++) {
		var currentCharCode = note.charCodeAt(i) - "a".charCodeAt(0);
		var tryInt = parseInt(note.substring(i, i + 1));
		if (currentCharCode > -1 && currentCharCode < 10) {
			decrypted += currentCharCode;
		} else if (tryInt > -1 && tryInt < 10) {
			var addNumber = String.fromCharCode(tryInt + "a".charCodeAt(0));
			decrypted += addNumber;
		} else {
			decrypted += note.substring(i, i + 1);
		}
	}
	return decrypted;
}

var test = "you'll n4v4r 6u4ss 8t: cdja"
console.log(stolenLunch(test))