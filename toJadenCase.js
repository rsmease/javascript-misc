String.prototype.toJadenCase = function () {
	var split = this.split(" ");
	var capitalized = []
	// console.log(split)
	split.forEach(function(ele) {
		var newWord = ele.substring(0, 1).toUpperCase() + ele.substring(1).toLowerCase();
		capitalized.push(newWord);
	})
	return capitalized.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase())

