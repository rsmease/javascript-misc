// CODEWRITING
// Score: 0/300
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 5 ≤ a.length ≤ 15,
// -1 ≤ a[i] ≤ 200.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
	var treesOnly = [];
	var peopleOnly = [];
	a.forEach(function(ele) {
		if (ele === -1) {
			treesOnly.push(-1);
		} else {
			treesOnly.push(undefined);
			peopleOnly.push(ele);
		}
	})
	peopleOnly = peopleOnly.sort(function(a, b) {return a - b});
	for (var i = 0; i < peopleOnly.length; i++) {
		var currentPerson = peopleOnly[i];
		for (var j = 0; j < treesOnly.length; j++) {
			if (treesOnly[j] === undefined) {
				treesOnly[j] = currentPerson;
				break;
			}
		}
	}
	return treesOnly;
}

var test1 = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(test1));