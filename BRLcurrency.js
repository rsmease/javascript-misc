//Refactored Sep 28 17
//Convert float value to BRL (Brazilian Real) currency format

function currencyBRL(number = 0) {
	if (!(/\d+\.?(\d+)?/.test(number))) {
		return "Invalid input."
	}
  return 'R$ ' + number.toFixed(2).replace('.',',');
}

console.log(currencyBRL(130.234312432134));
console.log(currencyBRL());
console.log(currencyBRL(000001));
