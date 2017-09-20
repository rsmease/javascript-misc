function higherVersion(ver1, ver2) {
	
	// if (ver1 === ver2) {
	// 	return false; 
	// }

	var ver1split = ver1.split(".").map(Number);
	var ver2split = ver2.split(".").map(Number);

	for (var i = 0; i < ver1split.length; i++) {
		if (ver1split[i] > ver2split[i]) {
			return true;
		} else if (ver1split[i] < ver2split[i]) {
			return false;
		}
	}
	return false;
}

console.log(higherVersion("0", "0"))
