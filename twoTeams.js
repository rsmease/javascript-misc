function alternatingSums(a) {
    if (a.length === 1) {
        a.push(0);
        return a;
    } else if (a.length === 2) {
        return a;
    } else {
        var team1 = [];
        var team2 = [];
        a.forEach(function(ele, i, arr) {
            if (i % 2 === 0) {
                team1.push(ele);
            } else {
                team2.push(ele);
            }
        })
        return [arrSum(team1), arrSum(team2)];
    }
}

function arrSum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    })
}