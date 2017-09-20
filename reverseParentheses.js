function reverseParentheses(s) {
    sSplit = s.split("");
    var newArr = [];
    var parenthesesIndices = [];
    for (var i = 0; i < sSplit.length; i++) {
        if (sSplit[i] === "(" || sSplit[i] === ")") {
            parenthesesIndices.push(i);
        }
    }
    for (var j = 0; j < sSplit.length; j++) {
        if (parenthesesIndices.indexOf(j))
    }
}

reverseParentheses("a(bc)de")