
function solution(pairs){
  var entries = [];
  for (key in pairs) {
    entries.push([key, pairs[key]])
  }
  var linkedEntries = entries.map(entry => entry.join(" = "))
  return linkedEntries.join(",")
}

console.log(solution({a: 1, b: '2'}))
