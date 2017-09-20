// Task

// Compare two integers given as strings. 'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.

// Input/Output

// [input] string a

// A string representing a positive integer without leading zeroes.

// 1 ≤ a.length ≤ 50

// [input] string b

// A string representing a positive integer without leading zeroes.

// 1 ≤ b.length ≤ 50

// [output] a string

// 'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.

// Example

// For a = "12" and b = "13", the output should be "less";

// For a = "875" and b = "799", the output should be "greater";

// For a = "1000" and b = "1000", the output should be "equal".

//NOTE: does not work for large integers
function compareIntegers(a, b) {
  //coding and coding..
  if (parseInt(a) > parseInt(b)) {
  	return "greater"
  } else if (parseInt(a) < parseInt(b)) {
  	return "less"
  } else {
  	return "equal"
  }
}

//my solution didn't work for large numbers for some reason; this works.
// function compareIntegers(a, b) {
//   return a.length > b.length ? 'greater':
//          a.length < b.length ? 'less':
//          a < b ? 'less':
//          a > b ? "greater":
//                  'equal'
// }

console.log(compareIntegers("12","12"))