var isMonotone = function(arr){
  for (var i = 0; i < arr.length -1; i++) {
    var curr = arr[i];
    var next = arr[i + 1];
    if (next < curr) {
      return false;
    }
  }
  return true;
}
