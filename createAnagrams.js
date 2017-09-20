function createAnagram(s, t) {
    var sSplit = s.split("");
    var tSplit = t.split("");
    
    for(var i = 0; i< sSplit.length; i++) {
        if (tSplit.indexOf(sSplit[i]) >= 0) {
        	// console.log(sSplit[i]);
            var removed = tSplit.splice(tSplit.indexOf(sSplit[i]), 1);
        }
    }

    // console.log(tSplit);
    
    return tSplit.length;
}

console.log(createAnagram("OVGHK", "RPGUC"));