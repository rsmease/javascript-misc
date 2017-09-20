function discoverOriginalPrice(discountedPrice, salePercentage){
	var price = (discountedPrice * (1/((100-salePercentage)/100))).toFixed(2);
	if (price - Math.floor(price) === 0) {
		return Math.floor(price);
	} else {
		return parseFloat(price);
	}
}