//refactored Fri Sep 29 to include Regex

//make string uppercase or lowercase depending on most frequent case
//where case frequency is event, default to lowercase

function caseUnification(s) {
  var uppercase = s.split("").filter(char => isUpper(char)).length;
  var lowercase = s.split("").filter(char => isLower(char)).length;

  return uppercase > lowercase ? s.toUpperCase() : s.toLowerCase();
}

function isUpper(char) {
  return /[A-Z]/.test(char);
}

function isLower(char) {
  return /[a-z]/.test(char);
}

console.log(caseUnification("AbA       "));
console.log(caseUnification("This is a sample sentence."));
console.log(caseUnification("DNA_id"));
