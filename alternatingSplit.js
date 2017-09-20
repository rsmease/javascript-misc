function encrypt(text, n) {
  var mutatedText = text
  for (var i = 0; i < n; i++) {
    mutatedText = mutatedText.split("")
    var part1 = mutatedText.filter(function(ele, i) {
      return !(is_even(i));
    })
    var part2 = mutatedText.filter(function(ele, i) {
      return is_even(i)
    })
    mutatedText = part1.join("") + part2.join("")
  }
  return mutatedText
}


//failed
function decrypt(encryptedText, n) {
  var mutatedText = encryptedText
  var len = mutatedText.length
  for (var i = 0; i < n; i++) {
    mutatedText = mutatedText.split("")
    var median = mutatedText.length / 2
    console.log(len)
    if (is_even(len)) {
      var part1 = mutatedText.slice(0, median)
      var part2 = mutatedText.slice(median, len)
    } else {
      var part1 = mutatedText.slice(0, median)
      var part2 = mutatedText.slice(median, len)
    }
    newString = []
    while (part1.length || part2.length) {
      if (part2.length) {
        nextLetterTwo = part2.pop();
        newString.unshift(nextLetterTwo);
      }
      if (part1.length) {
        nextLetterOne = part1.pop();
        newString.unshift(nextLetterOne);
      }
    }
    mutatedText = newString.join("")
  }
  return mutatedText;
}

function is_even(index) {
  return index % 2 === 0
}

console.log(decrypt("s eT ashi tist!", 2))
