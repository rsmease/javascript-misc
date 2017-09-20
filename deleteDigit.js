function deleteDigit(n) {
    var max = 0;
    for (var i = 0; i < n.toString().length; i++) {
        var nSplit = n.toString().split("");
        var removed = nSplit.splice(i, 1);
        console.log(nSplit);
        var total = parseInt(nSplit.join(""));
        console.log(total);
        if (total > max) {
            max = total; 
        }
        
    }
    console.log(max);
    return max;
}

deleteDigit(1001)