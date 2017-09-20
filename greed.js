function score(dice) {
  var score = 0;
  var count = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0}
  dice.forEach(ele => count[ele.toString()]++);

  //check score
  if (count["1"] >= 3) {
    score += 1000;
    count["1"] -= 3;
  }
  if (count["6"] >= 3) {
    score += 600;
    count["6"] -= 3;
  }
  if (count["5"] >= 3) {
    score += 500;
    count["5"] -= 3;
  }
  if (count["4"] >= 3) {
    score += 400;
    count["4"] -= 3;
  }
  if (count["3"] >= 3) {
    score += 300;
    count["3"] -= 3;
  }
  if (count["2"] >= 3) {
    score += 200;
    count["2"] -= 3;
  }
  if (count["1"] > 0) {
    score += 100 * count["1"];
    count["1"] = 0;
  }
  if (count["5"] > 0) {
    score += 50 * count["5"];
    count["5"] = 0;
  }
  return score;
}

console.log(score([1, 2, 4, 4, 1]))
