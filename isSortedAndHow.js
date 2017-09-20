function isSortedAndHow(array) {
	if (array.join("") == sortAscending(array).join("")) {
		return "yes, ascending"
	} else if (array.join("") == sortDescending(array).join("")) {
		return "yes, descending"
	} else {
		return "no"
	}
}

function sortAscending(arr) {
	return arr.sort(function(a, b) {return a - b})
}

function sortDescending(arr) {
	return arr.sort(function(a, b) {return a - b}).reverse()
}

console.log([15, 7, 3, -8].join(""))
console.log(sortDescending([15, 7, 3, -8]).join(""))