// Volleyball Positions

// Description:

// You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you’re curious about how the coach arranged the players on the field at the start of the game.

// The team you favor plays in the following formation:

// 0 3 0
// 4 0 2
// 0 6 0
// 5 0 1
// where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.

// Here’s how the players change their positions:



// Given the current formation of the team and the number of times k it gained the serve, find the initial position of each player in it.

// Example

// For
var formation1 = [["empty",   "Player5", "empty"],
             ["Player4", "empty",   "Player2"],
             ["empty",   "Player3", "empty"],
             ["Player6", "empty",   "Player1"]]
// and k = 2, the output should be

// volleyballPositions(formation, k) = [
//     ["empty",   "Player1", "empty"],
//     ["Player2", "empty",   "Player3"],
//     ["empty",   "Player4", "empty"],
//     ["Player5", "empty",   "Player6"]
// ]
// For
// formation = [["empty", "Alice", "empty"],
//              ["Bob",   "empty", "Charlie"],
//              ["empty", "Dave",  "empty"],
//              ["Eve",   "empty", "Frank"]]
// and k = 6, the output should be

// volleyballPositions(formation, k) = [
//     ["empty", "Alice", "empty"],
//     ["Bob",   "empty", "Charlie"],
//     ["empty", "Dave",  "empty"],
//     ["Eve",   "empty", "Frank"]
// ]
// Input/Output

// [time limit] 3000ms (cs)
// [input] array.array.string formation
// A 4 × 3 array of strings representing names of the players in the positions corresponding to those in the schema above.
// It is guaranteed that for each empty position the corresponding element of formation is "empty".
// It is also guaranteed that there is no player called "empty" in the team.

// [input] integer k
// The number of times the team gained the serve.

// Constraints:
// 0 ≤ k ≤ 109.

// [output] array.array.string
// Team arrangement at the start of the game.

// Tests:
// Solution(C#):
// 
function volleyballPositions(formation, k) {
    var localK = k % 6;
    if (localK === 0) {
        return formation;
    } else {
        var newFormation = formation.slice(0);
        for (var i = 0; i < formation.length; i++) {
            for (var j = 0; j < formation[0].length; j++) {
                var currentCell = formation[i][j];
                if (currentCell !== "empty") {
                    var currentPlayerNumber = parseInt(currentCell.charAt(currentCell.length - 1));
                    var newPlayerNumber = (currentPlayerNumber + localK) % 6; 
                    if (newPlayerNumber === 0) {
                        newPlayerNumber = 6;
                    }
                    newFormation[i][j] = "Player " + newPlayerNumber;
                } else {
                    newFormation[i][j] = "empty";
                }
            }
        }
        return newFormation
    }
}

console.log(volleyballPositions(formation1, 2));