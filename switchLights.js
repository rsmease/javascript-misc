// Description:

// N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

// Example

// For a = [1, 1, 1, 1, 1], the output should be
// switchLights(a) = [0, 1, 0, 1, 0].

// Check out the image below for better understanding:



// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer a
// Initial situation – array of zeros and ones of length N, 1 means that the corresponding candle is lit.

// Constraints:
// 5 ≤ a.length ≤ 5000.

// [output] array.integer
// Situation after applying the algorithm – array in the same format as input with the same length.
// 
function switchLights(a) {

	for (var i = 0; i < a.length; i++) {
		if (a[i] === 1) {
			a[i] = 0;
			for (var j = 0; j < i; j++) {
				if (a[j] === 1) {
					a[j] = 0;
				} else {
					a[j] = 1; 
				}
			}
		}
		console.log(a);
	}

	return a;

}

console.log(switchLights([1, 1, 1, 1, 1]));

