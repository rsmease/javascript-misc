function stringCounter(inputS, charS){
  var counter = 0;
  inputS.split("").forEach(function(ele) {
    if (ele === charS) {
      counter++;
    }
  })
  return counter;
}
