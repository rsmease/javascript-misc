function keysAndValues(data){
  var keys = [];
  var vals = [];
  for (key in data) {
    keys.push(key);
    vals.push(data[key]);
  }
  return [keys, vals];
}
