// Description:

// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

// Example

// For
// test1 = [[1, 1, 1],
//           [0, 0]]
// // and

// test2 = [[2, 1, 1],
//           [2, 1]]
// the output should be
// areIsomorphic(array1, array2) = true;

// For
test1 = [[2],
          []]
// and

test2 = [[2]]
// the output should be
// areIsomorphic(array1, array2) = false.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer array1
// Constraints:
// 1 ≤ array1.length ≤ 5,
// 0 ≤ array1[i].length ≤ 5,
// 0 ≤ array1[i][j] ≤ 50.

// [input] array.array.integer array2
// Constraints:
// 1 ≤ array2.length ≤ 5,
// 0 ≤ array2[i].length ≤ 5,
// 0 ≤ array2[i][j] ≤ 50.

// [output] boolean
// 
function areIsomorphic(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		for (var i = 0; i < arr1.length; i++) {
			if (arr1[i].length !== arr2[i].length) {
				return false;
			}
		}
		return true; 
	}

}

console.log(areIsomorphic(test1, test2));