// Description:

// Elections are in progress!

// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven’t cast their vote yet, find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same(maximum) number of votes, assume there is no winner at all.

// Example

// For votes = [2, 3, 5, 2] and k = 3, the output should be
// electionsWinners(votes, k) = 2.

// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer votes
// A non-empty array of non-negative integers. Its ith element denotes the number of votes cast for the ith candidate.

// Constraints:
// 4 ≤ votes.length ≤ 105,
// 0 ≤ votes[i] ≤ 104.

// [input] integer k
// The number of voters who haven’t cast their vote yet.

// Constraints:
// 0 ≤ k ≤ 105.

// [output] integer
// 

function maxOfArr(numArr) {
	return Math.max.apply(null, numArr);
}

function electionsWinners(votes, k) {
	var currentLeader = maxOfArr(votes);
	var hasAChanceCount = 0;

	if (k === 0) {
		votes.forEach(function(ele) {
			if (ele === currentLeader) {
				hasAChanceCount++;
			}
		})
		if (hasAChanceCount === 1) {
            return 1;
        } else {
            return 0;
        }
	} else {
		votes.forEach(function(ele) {
			if (ele + k > currentLeader || ele === currentLeader) {
				hasAChanceCount++;
			}
		})
		return hasAChanceCount;
	}
}