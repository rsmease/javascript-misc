function isMAC48Address(inputString) {
    var status = true;
    var inputSplit = inputString.split("-");
    if (inputSplit.length !== 6) {
        return false;
    } else {
        inputSplit.forEach(function(ele, i, arr) {
            if (ele.length !== 2 || (!(isHexa(ele)))) {
                // console.log(ele); 
                status = false;
            }
        })
    }
    return status;
}

var hexaArr = "0123456789ABCDEF".split("")

function isHexa(string) {
    for (var i = 0; i < string.length; i++) {
        if (hexaArr.indexOf(string.charAt(i)) < 0) {
            return false;
        }
    }
    return true;
}

console.log(isMAC48Address("Z1-1B-63-84-45-E6"));