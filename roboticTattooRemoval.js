//verion1
// function robot(skinScan) {
//     for (var i = 0; i < skinScan.length; i++) {
//     	for (var j = 0; j < skinScan[1].length; j++) {
//     		var currentCell = skinScan[i][j];
//     		if (currentCell === "X") {
//     			skinScan[i][j] = "*";
//     		}
//     	}
//     }
//     return skinScan;
// }
// 
// version2

function robot(skinScan) {
	var cellLayer; var currentCell
    return skinScan.map(cellLayer => cellLayer.map(currentCell => currentCell === 'X' ? '*' : currentCell));
}

var patient0 = [
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ','X','X',' ',' ',' ','X','X',' ',' '],
[' ','X',' ',' ','X',' ','X',' ',' ','X',' '],
[' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
[' ',' ','X',' ',' ',' ',' ',' ','X',' ',' '],
[' ',' ',' ','X',' ',' ',' ','X',' ',' ',' '],
[' ',' ',' ',' ','X',' ','X',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
]

console.log(robot(patient0))