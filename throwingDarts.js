function scoreThrows(radiuses){
  score = 0
  if (radiuses.length === 0) { return score; };

  radiuses.forEach(function(ele) {
    if (ele < 5) {
      score += 10;
    } else if (ele <= 10) {
      score += 5;
    }
  })

  if (radiuses.every(ele => ele < 5)) {
    score += 100;
  }

  return score;
}

console.log(scoreThrows([4, 4, 4]))
