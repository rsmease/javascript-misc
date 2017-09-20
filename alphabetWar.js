// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example

var left = {"w": 4, "p": 3, "b": 2, "s": 1}
var right = {"m": 4, "q": 3, "d": 2, "z": 1}

function alphabetWar(fight) {
	var leftScore = 0;
	var rightScore = 0
	for (var i = 0; i < fight.length; i++) {
		var currentChar = fight.charAt(i);
		if (currentChar in left) {
			leftScore += left[currentChar]
		} else if (currentChar in right) {
			rightScore += right[currentChar]
		}
	}
	if (leftScore > rightScore) {
		console.log("Left side wins!")
		return "Left side wins!"
	} else if (rightScore > leftScore) {
		console.log("Right side wins!")
		return "Right side wins!"
	} else {
		console.log("Let's fight again!")
		return "Let's fight again!"
	}
}

// clever alternative
// function alphabetWar(fight)
// {
//   thisIsWar = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
//   result = 0;
//   fight.split("").map(function(l) { result += thisIsWar[l] !== undefined ? thisIsWar[l] : 0});
//   return result < 0 ? "Right side wins!" : result > 0 ? "Left side wins!" : "Let's fight again!"
// }

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
