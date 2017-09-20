function count (string) {
  console.log(string)
  result = {};

  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    if (currentChar in result) {
      result[currentChar]++;
    } else {
      result[currentChar] = 1;
    }
  }
  console.log(result);
  return result;
}
