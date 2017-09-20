function addBinary(a,b) {
	return dec2bin(a+b)
}

function dec2bin(dec){
	return (dec >>> 0).toString(2);
}