function rounders(value) {
    var valueArr = value.toString().split("").map(Number);
    for (var i = valueArr.length - 1; i >= 1; i--) {
    	var currentVal = valueArr[i];
    	var nextVal = valueArr[i-1];
    	if (currentVal >= 5) {
    		valueArr[i] = 0;
    		valueArr[i-1]++;
    	} else {
    		valueArr[i] = 0;
    	}
    }
    return valueArr.map(String).join("");
}

console.log(rounders(1445));