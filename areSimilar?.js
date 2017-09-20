// Description:

// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements.

// Given two arrays, check whether they are similar.

// Example

// For A = [1, 2, 3] and B = [1, 2, 3], the output should be
// areSimilar(A, B) = true;
// For A = [1, 2, 3] and B = [2, 1, 3], the output should be
// areSimilar(A, B) = true;
// For A = [1, 2, 2] and B = [2, 1, 1], the output should be
// areSimilar(A, B) = false.
// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer A
// Array of integers.

// Constraints:
// 3 ≤ A.length ≤ 105,
// 1 ≤ A[i] ≤ 1000.

// [input] array.integer B
// Array of integers of the same length as A.

// Constraints:
// B.length = A.length,
// 1 ≤ B[i] ≤ 1000.

// [output] boolean
// true if A and B are similar, false otherwise.