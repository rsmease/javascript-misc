function min(arr, toReturn) {
  return toReturn === 'value' ? minArr(arr) : arr.indexOf(minArr(arr));
}

function minArr(arr) {
  return Math.min.apply(null, arr);
}
