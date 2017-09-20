//failed

function isMerge(s, part1, part2) {
  console.log(s)
  console.log(part1)
  console.log(part2)
  part1Letters = part1.split("")
  part2Letters = part2.split("")

  if (part1.length + part2.length != s.length) {
    return false;
  }

  for (var i = 0; i < s.length; i++) {
    var currentChar = s.charAt(i);
    if (part1Letters[0] === currentChar) {
      part1Letters.shift()
    } else if (part2Letters[0] === currentChar) {
      part2Letters.shift()
    } else {
      return false;
    }
  }
  return true;
}
