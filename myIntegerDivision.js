const myIntegerDivison = function(dividend, divisor) {
  //the divisor is the number that the dividend (the original number) is being split into

  //TODO: raise error if division by zero; accommodate negative inputs
  //accomodate negative input: use abs(dividend) and abs(divisor), but store a flag about valence of final result
  //use flag to change the result as needed
  let remainder = dividend;
  let result = 0;
  while (remainder >= divisor) {
    result++;
    remainder -= divisor;
  }
  return result;
};

const myRoundingIntegerDivison = function(dividend, divisor) {
  //the divisor is the number that the dividend (the original number) is being split into
  let remainder = dividend;
  let result = 0;
  while (remainder >= divisor) {
    result++;
    remainder -= divisor;
  }
  if (remainder > 0) {
    if (remainder * 2 >= divisor) {
      result++;
    }
  }
  return result;
};

console.log(myIntegerDivison(400, 41));
console.log(myRoundingIntegerDivison(400, 41));

//edge cases to consider:
//negative inputs
//non-numerical inputs
//divsion by Zero
