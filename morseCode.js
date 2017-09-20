//MORSE_CODE will be provided in the IDE

function decodeMorse(morseCode) {
  morseCodeWithoutWhitespace = morseCode.trim()
  morseWords = morseCodeWithoutWhitespace.split("   ")
  morseWords = morseWords.map(function(word){
    letters = word.split(" ")
    decodedLetters = []
    letters.forEach(function(letter) {
      decodedLetters.push(MORSE_CODE[letter])
    })
    return decodedLetters.join("")
  })
  return morseWords.join(" ")
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."))
