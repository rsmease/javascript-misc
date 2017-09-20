function race(v1, v2, g) {
  var v1Position = g;
  var v2Position = 0;

  if (v1 > v2) { return null; }

  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var hours = Math.floor(seconds/3600)
  seconds -= (hours*3600)
  var minutes = Math.floor(seconds/60)
  seconds -= (minutes*60)

  return [hours, minutes, seconds]
}

console.log(race(80, 91, 37))
