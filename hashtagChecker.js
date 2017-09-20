function generateHashtag (str) {
  if (str.length === 0) { return false; }

  var allWords = str.split(" ").map(word => capitalize(word)).join("")
  if (allWords.length > 139) { return false; }
  return "#" + allWords;
}

function capitalize(word) {
  if (word.length === 1) {
    return word.toUpperCase();
  } else {
    var first = word.substring(0, 1).toUpperCase();
    var rest = word.substring(1).toLowerCase();
    return first + rest;
  }
}
