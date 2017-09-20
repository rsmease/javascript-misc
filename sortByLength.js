function sortByLength(arr) {
	var byLength = [];
	for (var i = 0; i < arr.length; i++) {
		var currentLen = arr[i].length;
		if (byLength[currentLen] === undefined) {
			byLength[currentLen] = [];
		}
		console.log(byLength);
		byLength[currentLen].push(arr[i]);
	}
	
	var sorted = [];
	for (var j = 0; j < byLength.length; j++) {
		if (byLength[j] !== undefined) {
			byLength[j].forEach(function(ele) {
			sorted.push(ele);
		})
		}
	}
	return sorted;
}

var test1 = ["zz", 
 "", 
 "bb", 
 "ccc", 
 "cc"]

console.log(sortByLength(test1));