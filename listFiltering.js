function filter_list(l) {
  // Return a new array with the strings filtered out
  var filtered =  l.filter(isNotString);
  return filtered;
}

function isNotString(ele) {
	return typeof(ele) !== "string"
}

console.log(filter_list([1, 2, 3, "a"]))