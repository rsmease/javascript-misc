let checkParentheses = function(string) {
  let parenthesesLibrary = { '{': 0, '(': 0, '[': 0 };
  let closingParentheses = ['}', ')', ']'];
  let openingParentheses = ['{', '(', '['];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);
    if (openingParentheses.includes(currentChar)) {
      parenthesesLibrary[currentChar]++;
    } else if (closingParentheses.includes(currentChar)) {
      let match = openingParentheses[closingParentheses.indexOf(currentChar)];
      if (parenthesesLibrary[match] > 0) {
        parenthesesLibrary[match]--;
      } else {
        return false;
      }
    }
  }

  return Object.values(parenthesesLibrary).reduce((x, y) => x + y) === 0;
};

// let result = checkParentheses('[test[]');
// console.log(result);

//for valid nesting:
