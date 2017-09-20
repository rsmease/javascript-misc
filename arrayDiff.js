function array_diff(a, b) {
  difference = []
  a.forEach(function(ele) {
    if (b.indexOf(ele) === -1) {
      difference.push(ele);
    }
  })
  return difference;
}

console.log(array_diff([2, 1],[1]))
