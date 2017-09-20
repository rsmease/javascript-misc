// Description:

// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it’s a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example

// For
// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]
// the output should be
// pairOfShoes(shoes) = true;

// For
shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
// the output should be
// pairOfShoes(shoes) = false.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer shoes
// Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

// Constraints:
// 1 ≤ shoes.length ≤ 25,
// 1 ≤ shoes[i][1] ≤ 100.

// [output] boolean
// true if it is possible to pair the shoes, false otherwise.
// 

function pairOfShoes(arr) {
	var ShoesLib = {};
	for (var i = 0; i < arr.length; i++) {

		//gather shoe vals
		var currentFoot = arr[i][0];
		var currentShoeID = arr[i][1];

		//record shoe in library; matching shoes will set entry to 0;
		if (currentShoeID in ShoesLib) {
			if (currentFoot === 0) {
				ShoesLib[currentShoeID]--;
			} else {
				ShoesLib[currentShoeID]++;
			}
		} else {
			if (currentFoot === 0) {
				ShoesLib[currentShoeID] = -1;
			} else {
				ShoesLib[currentShoeID] = 1;
			}
		}
	}

	console.log(ShoesLib)
	//scan lib for orphaned shoes
	for (key in ShoesLib) {
		if (ShoesLib[key] !== 0) {
			return false;
		}
	}
	return true; 
}

var test = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]];

console.log(pairOfShoes(test))
