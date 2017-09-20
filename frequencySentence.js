function freqSeq(str, seq) {
  var frequencies = {}
  str.split("").forEach(function(ele){
    if (ele in frequencies) {
      frequencies[ele]++;
    } else {
      frequencies[ele] = 1;
    }
  })
  new_str = str.split("").map(function(ele) {
    return frequencies[ele];
  })
  return new_str.join(seq)
}


console.log(freqSeq('hello world', '-'))
console.log(freqSeq('19999999',    ':'))
