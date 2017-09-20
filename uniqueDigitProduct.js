function uniqueDigitProducts(a) {
	var digitProducts = [];
	for (var i = 0; i < a.length; i++) {
		digitProducts.push(getProd(a[i]));
	}
	var productSet = new Set(digitProducts);
	return productSet.size;
}

function getProd(num) {
	var numSplit = num.toString().split("").map(Number);
	var total = 1;
	for (var i = 0; i < numSplit.length; i++) {
		total *= numSplit[i]; 
	}
	return total;
}

var test1 = [2, 8, 121, 42, 222, 23];
console.log(uniqueDigitProducts(test1));