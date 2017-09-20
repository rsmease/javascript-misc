function head(arr) {
  return arr[0];
}

function tail(arr) {
  var dupe = arr.slice();
  var first = dupe.shift();
  return dupe;
}

function init(arr) {
  var dupe = arr.slice();
  var last = dupe.pop();
  return dupe;
}

function last(arr) {
  return arr.slice().pop();
}
