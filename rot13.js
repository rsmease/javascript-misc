function rot13(message){
  var translated = ""
  for (i = 0; i < message.length; i++) {
    var current = message.substring(i, i+1);
    if (isLetter(current)) {
      current = shift(current);
    }
    translated += current;
  }
  return translated;
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-zA-z]/i);
}

function shift(char) {
  var current = char.charCodeAt(0);
  if (current >= "a".charCodeAt(0)) {
    current += 13
    if (current > "z".charCodeAt(0)) {
      current %= "z".charCodeAt(0);
      current += "a".charCodeAt(0) - 1;
    }
  } else {
    current += 13
    if (current > "Z".charCodeAt(0)) {
      current %= "Z".charCodeAt(0);
      current += "A".charCodeAt(0) - 1;
    }
  }
  return String.fromCharCode(current);
}

console.log(rot13("grfg"))
