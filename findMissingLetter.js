function findMissingLetter(array) {
  checkString = array.join("")
  for (var i = 0; i < checkString.length; i++) {
    currentCode = checkString.charCodeAt(i)
    nextCode = checkString.charCodeAt(i+1)
    if (currentCode + 1 !== nextCode) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return "FAILED"
}
