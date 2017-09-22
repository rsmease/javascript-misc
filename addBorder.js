//Add border of asterisks to matrix
//refactored Fri Sep 22 2017

function addBorder(matrix) {

	var core = matrix.map(ele => "*" + ele + "*");
	var edge = "*".repeat(core[0].length);

	core.push(edge);
	core.unshift(edge);
	return core;

}

var picture = ["look", "atMy", "code"];
console.log(addBorder(picture).join("\n"));
