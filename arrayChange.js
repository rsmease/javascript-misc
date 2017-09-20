function arrayChange(inputArray) {
    
    var increasingArray = [inputArray[0]];
    var augmentCount = 0;
    for (var i = 1; i < inputArray.length; i++) {
    	var current = inputArray[i];
    	var previous = increasingArray[i-1];
    	if (current > previous) {
    		increasingArray.push(current);
    	} else {
    		increasingArray.push(previous + 1);
    		augmentCount += ((previous + 1) - current);
    	}
    }

    // console.log(augmentCount);
    return augmentCount;

}

arrayChange([1, 1, 1])