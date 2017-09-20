
//shortest to longest
function sortByLength (array) {
  return array.sort(function(a, b) {
  	return a.length - b.length;
  })
};

//longest to shortest
function sortByLength (array) {
  return array.sort(function(a, b) {
  	return b.length - a.length;
  })
};