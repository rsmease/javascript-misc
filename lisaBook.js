//FAILED

function processData(input) {
	splitInput = input.split("\n");

	var bookConstraints = splitInput[0].split(" ").map(Number);
	var numChapters = bookConstraints[0];
	var exercisesPerPage = bookConstraints[1];

	var exerciseCounts = splitInput[1].split(" ").map(Number);
	var totalExercises = exerciseCounts.reduce(function(a,b) {
		return a+b}, 0);

	var pageNum = 1;
	var specialProblems = 0;
	
	for (var i = 0; i < numChapters; i++) {

		console.log("Chapter : " + (i+1));

		var exercisesInChapter = exerciseCounts[i];
		var chapterPages = Math.ceil(exercisesInChapter/exercisesPerPage) + pageNum;

		console.log("There are " + chapterPages + " in ")

		var startingExercise = 1;
		for (var j = pageNum; j < chapterPages; j++) {

			for (var k = startingExercise; k < (startingExercise + exercisesPerPage); k++) {
				if (j === k) {
					console.log("Problem number " + (k) + " in chapter " + (i+1));
					specialProblems += 1;
				}
			}

			startingExercise += exercisesPerPage;

		}

		pageNum = chapterPages;
	}

	console.log(specialProblems);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
