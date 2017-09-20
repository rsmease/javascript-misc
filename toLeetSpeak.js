var leetDict = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}

function toLeetSpeak(str) {
  var translated = "";
  for (var i = 0; i < str.length; i++) {
    var currentChar = str.charAt(i);
    if (currentChar in leetDict) {
      translated += leetDict[currentChar]
    } else {
      translated += currentChar
    }
  }
  return translated
}