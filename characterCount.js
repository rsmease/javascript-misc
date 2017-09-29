//Refactored Fri Sep 29
//count frequency of all chars in a string; case sensitive

function charCount(string) {
  result = {};
  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    if (currentChar in result) {
      result[currentChar]++;
    } else {
      result[currentChar] = 1;
    }
  }
  return result;
}

console.log(charCount("Ryan is writing a test."))
