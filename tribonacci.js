function tribonacci(signature,desiredLength){
  my_sequence = signature
  if (desiredLength < 3) {
    if (desiredLength === 0) {
      return []
    } else {
      return my_sequence.slice(0, desiredLength)
    }
  }
  while (my_sequence.length < desiredLength) {
    nextInSeries = my_sequence.slice(-3).reduce((a, b) => a + b)
    my_sequence.push(nextInSeries)
  }
  return my_sequence
}

console.log(tribonacci([1, 1, 1], 10))
