// Description:

// You are implementing a command-line version of the Paint app. Since the command line doesn’t support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

// Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

// Example

// For

var canvas1 = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']];
var rectangle1 = [1, 1, 4, 3];
// and rectangle = [1, 1, 4, 3], the output should be


// drawRectangle(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
//                                     ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
//                                     ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
//                                     ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
//                                     ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
// Note that rectangle sides are depicted as -s and |s, asterisks (*) stand for its corners and all of the other “pixels” remain the same. Color in the example is used only for illustration.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.char canvasA non-empty rectangular matrix of characters.
// Constraints:
// 2 ≤ canvas.length ≤ 10,
// 2 ≤ canvas[0].length ≤ 10.

// [input] array.integer rectangleArray of four integers – [x1, y1, x2, y2].
// Constraints:
// 0 ≤ x1 < x2 < canvas[i].length,
// 0 ≤ y1 < y2 < canvas.length.

// [output] array.array.char
// 
function drawRectangle(canvas, rectangle) {
	var newCanvas = canvas.slice(0);
	var x1 = rectangle[0];
	var x2 = rectangle[2];
	var y1 = rectangle[1];
	var y2 = rectangle[3];

	for (var i = 0; i < canvas.length; i++) {
		for (var j = 0; j < canvas[0].length; j++) {
			if (i === y1 || i === y2) {
				if (j === x1 || j === x2) {
					newCanvas[i][j] = "*";
				} else if (j > x1 && j < x2) {
					newCanvas[i][j] = "|";
				}
			} else if (i > y1 && i < y2) {
				if (j === x1 || j === x2) {
					newCanvas[i][j] = "-";
				}
			}
		}
	}
	console.log(newCanvas);
	return newCanvas;

}

// drawRectangle(canvas1, rectangle1);
