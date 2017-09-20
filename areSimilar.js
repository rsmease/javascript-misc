function areSimilar(a, b) {
    if (a.reduce(function(a,b) {return a + b}) !== b.reduce(function(a,b) {return a + b})) {
        return false;
    } else {
        var varianceIndex = [];
        var varianceCount = 0;
        a.forEach(function(ele, i, arr) {
            if (!(a[i] === b[i])) {
                varianceIndex.push(a[i]);
                varianceIndex.push(b[i]);
                varianceCount++;
            }
        })
        varianceSet = new Set(varianceIndex);
        return varianceSet.size === 2 || varianceCount === 0; 
    }
}

console.log(areSimilar([1, 2, 2], [2, 1, 1]));