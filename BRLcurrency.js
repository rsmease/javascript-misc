function currencyBRL(number) {
	if (number === undefined) {
		return "R$ 0,00"
	} else {
		numRounded = parseFloat(number).toFixed(2).toString().split("");
		BRL_converted = "R$ ";
		numRounded.forEach(function(ele) {
			if (ele === ".") {
				BRL_converted += ","
			} else {
				BRL_converted += ele;
			}
		})
		return BRL_converted
	}
}

console.log(currencyBRL(10.2334))

//simpler alternative using 'replace'
//function currencyBRL(number=0) {
//   return 'R$ ' + number.toFixed(2).replace('.',',');
// }