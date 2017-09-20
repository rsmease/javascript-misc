function isIsogram(str){
	var testSet = new Set(str.toLowerCase().split(""))
	return testSet.size === str.length;
}

console.log(isIsogram("thiSs"))