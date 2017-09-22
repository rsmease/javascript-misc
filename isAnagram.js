//are two inputs anagrams?

var isAnagram = function(test, original) {
  //case insensitive
  var sorted_test = [ ...test.toLowerCase() ].sort().join();
  var sorted_original = [ ...original.toLowerCase() ].sort().join();

  return sorted_test === sorted_original;
};

console.log(isAnagram("Ryan", "nyRa"))
