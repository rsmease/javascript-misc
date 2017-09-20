function reverseWords(str) {
  var chars = [ ...str ];
  var reversedWords = []

  var currentWord = []

  for (var i = 0; i < chars.length; i++) {
    var currentChar = chars[i];
    if (currentChar === " ") {
      if (currentWord.length > 0) {
        reversedWords.push(currentWord.reverse().join(""));
        currentWord = [];
      }
      reversedWords.push(currentChar);
    } else {
      currentWord.push(currentChar);
    }
  }

  if (currentWord.length > 0) {
    reversedWords.push(currentWord.reverse().join(""));
  }

  return reversedWords.join("");

}

console.log(reverseWords("The          quick brown fox jumps over the lazy dog."))
