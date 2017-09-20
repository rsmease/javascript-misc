function candles(candlesNumber, makeNew) {
    if (candlesNumber < makeNew) {
    	return candlesNumber;
    } else {
    	var total = candlesNumber;
    	var remainders = candlesNumber;

    	while (remainders >= makeNew) {
    		var bonusCandles = (Math.floor(remainders / makeNew))
    		total += bonusCandles;
    		remainders += bonusCandles;
    		remainders -= (bonusCandles*makeNew);
    		// console.log(remainders);
    	}
    	return total;
    }
}

console.log(candles(5, 2));

