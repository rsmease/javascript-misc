function alternateCase(s) {
  sSwapped = ""
  for (var i = 0; i < s.length; i++) {
    var currentChar = s.charAt(i);
    if (isUpper(currentChar)) {
      sSwapped += currentChar.toLowerCase();
    } else {
      sSwapped += currentChar.toUpperCase();
    }
  }
  return sSwapped;
}

function isUpper(char) {
  return char.toUpperCase() === char;
}
