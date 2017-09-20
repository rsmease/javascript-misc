function additionWithoutCarrying(param1, param2) {
    var num1 = param1.toString().split("");
    var num2 = param2.toString().split("");
    
    if (num1.length < num2.length) {
    	while (num1.length < num2.length) {
    		num1.unshift(0);
    	}
    } else if (num2.length < num1.length) {
    	while (num2.length < num1.length) {
    		num2.unshift(0);
    	}
	}

	result = [];

	num1.forEach(function(ele, i, arr) {
		result.push((parseInt(num1[i]) + parseInt(num2[i])) % 10);
	})

	console.log(result);

	return parseInt(result.join(""));
}

console.log(additionWithoutCarrying(12392, 2341))