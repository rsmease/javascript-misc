function groupCheck(s){
  var chars = [ ...s ]
  var balance = []

  for (var i = 0; i < chars.length; i++) {
    var curr =  chars[i];
    if (["(", "[", "{"].includes(curr)) {
      balance.push(curr);
    } else {
      if (curr === ")") {
        var remove = balance.pop();
        if (!(remove === "(")) {
          return false;
        }
      } else if (curr === "]") {
        var remove = balance.pop();
        if (!(remove === "[")) {
          return false;
        }
      } else {
        var remove = balance.pop();
        if (!(remove === "{")) {
          return false;
        }
      }
    }
  }

  return balance.length === 0;
}

console.log(groupCheck("(("))
