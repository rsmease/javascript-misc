//swaps case of all alphabetic characters
//ignores /[^A-Za-z]/ input
//refactored Sep 27 17

function isUpper(char) {
  return /[A-Z]/.test(char);
}

function alternateCase(str) {
  var chars = str.split("")
  return chars.map(function(ele) {
    return isUpper(ele) ? ele.toLowerCase() : ele.toUpperCase();
  }).join("")
}

console.log(alternateCase("Business students read case studies."))
