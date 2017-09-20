function decipher(cipher) {

	var buildSubstring = "";
	var buildDecrypted = "";

	for (var i = 0; i < cipher.length; i++) {

		buildSubstring += cipher.substring(i, i+1);

		var test = parseInt(buildSubstring);
		if (test >= "a".charCodeAt(0) && test <= "z".charCodeAt(0)) {
			buildDecrypted += String.fromCharCode(test);
			buildSubstring = "";
		}

	}



	return buildDecrypted;


}

console.log(decipher("10197115121"))