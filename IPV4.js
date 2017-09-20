function isIPv4Address(inputString) {
    if (inputString.charAt(0) === ".") {
        return false; 
    }
    var periodCount = 0;
    var adjacentPeriodCount = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) === ".") {
            periodCount++;
            if (i !== inputString.length -1 && inputString.charAt(i+1) === ".") {
                adjacentPeriodCount++;
            }
        } 
    }
    if (periodCount !== 3 || adjacentPeriodCount > 0) {
        return false; 
    }
    inputArrCheck = inputString.split(".").map(Number)
    // console.log(inputArrCheck);
    for (var j = 0; j < inputArrCheck.length; j++) {
        if (inputArrCheck[j] < 0 || inputArrCheck[j] > 255 || isNaN(inputArrCheck[j])) {
            return false;
        }
    }
    return true; 
}

console.log(isIPv4Address("172.16.254.1"));