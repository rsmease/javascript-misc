Array.prototype.numberOfOccurrences = function(test) {
	var count = 0;
	this.forEach(function(ele) {
		if (ele === test) {
			count++;
		}
	})
	return count;
}