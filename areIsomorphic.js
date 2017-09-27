//isomorphic arrays share the same number of rows, each of identical length; isomorphism is agnostic to the content of the arrays

//ultimately, I settled on a simple for-loop search of the subarrays
//pre-comparing flattened arrays and sorting in order to compare the shorter subarrays seemed clever but less efficient

//refactored Sep 27 17

function areIsomorphic(arr1, arr2) {
  return arr1.length === arr2.length && allRowsSameLength(arr1, arr2);
}

function allRowsSameLength(arr1, arr2) {
  //search arrays for misaligned subarrays
  for (var i = 0; i < arr1.length; i++) {
    var curr1 = arr1[i].length;
    var curr2 = arr2[i].length;
    if (curr1 !== curr2) { return false; };
  }
  return true;
}
