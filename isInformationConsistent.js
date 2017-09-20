// Description:

// Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witnesses a simple question – “guilty or not?”. The witnesses are allowed to respond in one of the following three ways:

// I am sure he/she is guilty.
// I am sure he/she is innocent.
// I have no idea.
// The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.

// Example

// For
evidences1 = [[ 0, 1, 0, 1], 
             [-1, 1, 0, 0], 
             [-1, 0, 0, 1]]
// the output should be
// isInformationConsistent(evidences) = true;

// For
evidences2 = [[ 1, 0], 
             [-1, 0], 
             [ 1, 1],
             [ 1, 1]]
// the output should be
// isInformationConsistent(evidences) = false.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.integer evidences
// 2-dimensional array of integers representing the set of testimonials. evidences[i][j] is the testimonial of the ith witness on the jth defendant. -1 means “innocent”, 0 means “no idea”, and 1 means “guilty”.

// Constraints:
// 2 ≤ evidences.length ≤ 5,
// 2 ≤ evidences[0].length ≤ 10.

// [output] boolean
// true if the evidence is consistent, false otherwise.

function isInformationConsistent(evidences) {
	for (var j = 0; j < evidences[0].length; j++) {
		var currentCol = j;
		var innocentCount = 0;
		var guiltyCount = 0;
		for (var i = 0; i < evidences.length; i++) {
			if (evidences[i][currentCol] === 1) {
				innocentCount++;
			} else if (evidences[i][currentCol] === -1) {
				guiltyCount++;
			}
		}
		if (innocentCount > 0 && guiltyCount > 0) {
			return false; 
		}
	}
	return true; 
}

console.log(isInformationConsistent(evidences2))