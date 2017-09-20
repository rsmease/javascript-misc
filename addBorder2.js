// Description:

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [time limit] 3000ms (cs)
// [input] array.string picture
// A non-empty array of non-empty equal-length strings.

// Constraints:
// 1 ≤ picture.length ≤ 5,
// 1 ≤ picture[i].length ≤ 5.

// [output] array.string
// The same matrix of characters, framed with a border of asterisks of width 1.
// 
function addBorder(matrix) {
	var borderedMatrix = [];
	var rowLen = matrix[0].length + 2;

	borderedMatrix.push(addTopBottomBorder(rowLen));
	for (var i = 0; i < matrix.length; i++) {
		var currentRow = [];
		currentRow.push("*");
		currentRow.push(matrix[i]);
		currentRow.push("*");
		borderedMatrix.push(currentRow.join(""));
	}
	borderedMatrix.push(addTopBottomBorder(rowLen));

	return borderedMatrix;

}

function addTopBottomBorder(len) {
	var border = [];
	for (var i = 0; i < len; i++) {
		border.push("*");
	}
	return border.join("");
}

var picture = ["a"];
console.log(addBorder(picture));