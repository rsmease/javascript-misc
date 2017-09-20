function stray(numbers) {
	var numbersSorted = numbers.sort();
	if (numbersSorted[0] === numbersSorted[1]) {
		return numbersSorted[numbers.length-1];
	} else {
		return numbersSorted[0];
	}
}

console.log(stray([1,true,1,1,1]))