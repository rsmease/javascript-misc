function stringsConstruction(A, B) {
    var myStrings = "";
    var bSplit = B.split("");
    while (true) {
        var foundStatus = true;
        for (var i = 0; i < A.length; i++) {
            var currentChar = A.charAt(i);
            if (bSplit.indexOf(currentChar) >= 0) {
                myStrings += currentChar;
                var removalIndex = bSplit.indexOf(currentChar);
                var removed = bSplit.splice(removalIndex, 1);
                // console.log(myStrings);
                // console.log(bSplit);
            } else {
                foundStatus = false;
                break; 
            }
        }
        if (!(foundStatus)) {
            break; 
        }
    }
    // console.log(myStrings);
    return Math.floor(myStrings.length / A.length)
}

console.log(stringsConstruction("abc", "abccba"))