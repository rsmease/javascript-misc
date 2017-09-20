function presses(phrase) {
  var chars = [ ...phrase.toUpperCase() ]
  var keys = [[],
              [ ..."1ADGJMPTW " ],
              [ ..."BEHKNQUX0" ],
              [ ..."CFILORVY" ],
              [ ..."SZ23456789"]]

  var presses = 0;
  for (var i = 0; i < chars.length; i++) {
    var currentChar = chars[i];
    for (var j = 0; j < keys.length; j++) {
      if (keys[j].includes(currentChar)) {
        presses += j;
      }
    }
  }
  return presses;
}

console.log(presses("WHERE DO U WANT 2 MEET L8R"))
