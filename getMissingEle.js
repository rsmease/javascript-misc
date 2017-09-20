function getMissingElement(superImportantArray){
  var digits = [ ..."0123456789" ].map(Number)
  var missing = -1
  digits.forEach(function(ele) {
    if (superImportantArray.indexOf(ele) === -1) {
      missing = ele;
    }
  })
  return missing;
}
