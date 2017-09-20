function lineupStudents(students){
  return students.split(" ").sort(function(a, b) {
    return b.length - a.length;
  })
}

console.log(lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"))
