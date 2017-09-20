function order(words){
  wordNumbers = words.split(" ").map(function(word) {
    return [wordNumber(word), word];
  })

  sortedWords = wordNumbers.sort(function(a, b) {
    return a[0] - b[0];
  })

  return sortedWords.map(function(word) {
    return word[1];
  }).join(" ")

}

function wordNumber(word) {
  letters = word.split("").map(Number)
  number = letters.filter(function(letter) {
    return (!(isNaN(letter)))
  })
  return number[0]
}

console.log(order("is2 Thi1s T4est 3a"))
