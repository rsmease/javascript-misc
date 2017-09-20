function findNb(m) {
  cubicSum = 0
  for (unit = 1; unit < m; unit++) {
    cubicSum += Math.pow(unit, 3)
    if (cubicSum === m) {
      return unit
    } else if (cubicSum > m) {
      return -1
    }
  }
  return "FAILED"
}
