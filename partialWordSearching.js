// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python)

// Examples

// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])//, ["ab", "abc", "zab"])
wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])//, ["ab", "abc", "zab"])
wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])//, ["aB", "Abc", "zAB"])
wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])//, ["Empty"])

function wordSearch(query, seq){
  //your code here
  result = [];
  seq.forEach(function(ele) {
  	if (ele.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
  		result.push(ele);
  	}
  })
  if (result.length === 0) {
  	result = ["Empty"]
  }
  return result; 
}
//alternate version using filter; I like this! I thought you could not use anon functions with filter
// function wordSearch(query, seq){
//   query = query.toLowerCase();
//   var res = seq.filter(function(item) {
//     return item.toLowerCase().indexOf(query) !== -1;
//   });
  
//   return res.length ? res : ["Empty"];
// }
test1 = wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])//, ["ab", "abc", "zab"])
test2 = wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])//, ["ab", "abc", "zab"])
test3= wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])//, ["aB", "Abc", "zAB"])
test4 = wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])//, ["Empty"])

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)