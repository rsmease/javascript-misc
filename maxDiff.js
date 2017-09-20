function maxDiff(list) {
  if (list.length === 0) {
    return 0;
  } else if (list.length === 1) {
    return 0;
  } else {
    return Math.abs(maxOfArr(list) - minOfArr(list));
  }
}

function maxOfArr(arr) {
  return Math.max.apply(null, arr)
}

function minOfArr(arr) {
  return Math.min.apply(null, arr)
}
