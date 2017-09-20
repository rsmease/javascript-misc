function getRectangleString(width, height) {

	var rectangle = [];
	if (width === 1) {
		body = "*" + "\r\n"
		for (var i = 0; i < height; i++) {
			rectangle.push(body);
		}
	} else {
		var edge = "*".repeat(width) + "\r\n";
		var body = "*" + (" ".repeat(width-2)) + "*"  + "\r\n";

		rectangle.push(edge);
		for (var i = 0; i < height - 2; i++) {
			rectangle.push(body);
		}
		rectangle.push(edge);
	}
	return rectangle.join("");
}

console.log(getRectangleString(2, 3))