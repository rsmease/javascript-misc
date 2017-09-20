function allLetters() {
  var lettersArr = [ ..."abcdefghijklmnopqrstuvwxyz ." ]
  var lettersObj = {}
  lettersArr.forEach(function(ele) {
    lettersObj[ele] = 0;
  })
  lettersObj[" "] = 1;
  lettersObj["."] = 1;
  return lettersObj;
}

function isPangram(str) {
  var letters = allLetters();
  var chars = [ ...str.toLowerCase() ]
  chars.forEach(ele => letters[ele]++)
  for (key in letters) {
    if (letters[key] === 0) {
      return false;
    }
  }
  return true
}

//Clever idea from someone else
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

console.log(pangram("This is not a pangram."))
