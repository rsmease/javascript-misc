//refactored Fri Sep 29
//transform string into palindrome

//does not produce shortest possible palindrome
//buildPalindrome("faa") => "faaaf" and not "faaf"
//this is designed to increase efficiency through fewer lookups

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function buildPalindrome(str) {
  var copy = str
  var patternIndex = str.length - 2;
  while (!(isPalindrome(copy))) {
    copy += str.substring(patternIndex, patternIndex + 1);
    patternIndex--;
  }
  return copy;
}

console.log(buildPalindrome("faa"));
console.log(buildPalindrome("radar"))
console.log(buildPalindrome(""))
