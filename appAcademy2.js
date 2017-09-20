
// # Word With Most Repeats
// # ------------------------------------------------------------------------------
// # Given a sentence, find which word has the greatest amount of repeated letters.
// #
// # For example, "I took the road less traveled and that has made all the difference"
// # should return "difference" because it has two repeated letters (f and e).
// #
// # All words will be separated by spaces and there will be no punctuation or
// # capitalization.  If there is a tie return the first word.  It doesn't matter
// # how many times individual letters repeat, just that they repeat (see the third test
// # case).
// #
// # Examples:
// wordWithMostRepeats('good luck') //=> 'good'
// wordWithMostRepeats('what if there is a tie betwixt words') //=> 'there'
// wordWithMostRepeats('ooooooooooh tutu') //=> 'tutu'


// function wordWithMostRepeats(sentence) {
// 	var maxRepeat = 0;
// 	var maxRepeatIndex = 0; //if same repeated letters in all words, return first word
// 	var splitSentence = sentence.split(" ");
// 	splitSentence.forEach(function(ele, i, arr) {
// 		var repeatCount = findRepeatedLetters(ele);
// 		if (repeatCount > maxRepeat) {
// 			maxRepeatIndex = i;
// 			maxRepeat = repeatCount;
// 		}
// 	})
// 	console.log(splitSentence[maxRepeatIndex]);
// 	return splitSentence[maxRepeatIndex];
// }

// function findRepeatedLetters(word) {
// 	var repeatCount = 0;
// 	var seenLetters = {};
// 	splitWord = word.split("");
// 	splitWord.forEach(function(ele, i, arr) {
// 		if (ele in seenLetters) {
// 			seenLetters[ele]++;
// 		} else {
// 			seenLetters[ele] = 1;
// 		}
// 	})
// 	console.log(seenLetters);
// 	for (key in seenLetters) {
// 		if (seenLetters[key] > 1) {
// 			repeatCount++;
// 		}
// 	}
// 	return repeatCount;
// }



/*
# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.
# Don't count empty strings after the split.
# Here's an example for "banana":
#
# "banana".split("a") # => ["b", "n", "n", ""] (all elements same length except
# for empty string)
# "banana".split("b") # => ["", anana"] (all elements same length - there's only
# one element "anana" because the empty string doesn't count)
# "banana".split("n") # => ["ba", "a", "a"] (all elements NOT same length)
#
# result: ["b", "a"]
#
# Examples:
# evenSplitters("") => []
# evenSplitters("t") => ["t"]
# evenSplitters("jk") => ["j", "k"]
# evenSplitters("xoxo") => ["x", "o"]
# evenSplitters("banana") => ["b","a"]
# evenSplitters("mishmash") => ["m","h"]
# ------------------------------------------------------------------------------
*/

// function evenSplitters(str) {
//   // your code here...
//   var validSplits = [];
//   for (var i = 0; i < str.length; i++) {
//   	var currentChar = str.charAt(i);
//   	var testSplit = str.split(currentChar);
//   	testSplit.forEach(function(ele, i, arr) {
//   		if (ele == "") {
//   			testSplit.splice(i, 1);
//   		}
//   	})
//   	var testLen = testSplit[0].length;
//   	var test = true;
//   	testSplit.forEach(function(ele, i, arr) {
//   		if (ele.length !== testLen) {
//   			test = false;
//   		}
//   	})
//   	if (test) {
//   		validSplits.push(currentChar);
//   	}
//   }
//   var validSplitsSet = new Set(validSplits);
//   validSplits = Array.from(validSplitsSet);
//   console.log(validSplits);
//   return validSplits;
// }

// evenSplitters("") //=> []
// evenSplitters("t") //=> ["t"]
// evenSplitters("jk") //=> ["j", "k"]
// evenSplitters("xoxo") //=> ["x", "o"]
// evenSplitters("banana") //=> ["b","a"]
// evenSplitters("mishmash") //=> ["m","h"]

/*
# Xbonacci
# ------------------------------------------------------------------------------
# Write a Xbonacci function that works similarly to the fibonacci sequence.
# The fibonacci sequence takes the last two numbers in the sequence and adds
# them together to create the next number.
#
# First five fibonacci numbers = [1, 1, 2, 3, 5]
# The fourth fibonacci number (3) is the sum of the two numbers before it
# (1 and 2).
#
# In Xbonacci, the sum of the last X numbers (instead of the last 2 numbers)
# of the sequence becomes the next number in the sequence.
#
# The method will take two inputs (the starting sequence with X number of
# elements and an integer N) and return the first N elements in the given
# sequence.  Take a look at the test cases for examples.
#
# In the code, numsToSum is the same as X (name your variables
# descriptively!).
#
# In the code, returnSequenceLength is the same as N.
# Examples:
# xbonacci([1, 1], 5) => [1, 1, 2, 3, 5]
# xbonacci([1, 1, 1], 6) => [1, 1, 1, 3, 5, 9]
# xbonacci([1, 1, 1, 1], 8) => [1, 1, 1, 1, 4, 7, 13, 25]
# xbonacci([1, 1, 1, 1, 1, 1], 10) => [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
# xbonacci([0, 0, 0, 0, 1], 10) => [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]
*/

// function xbonacci(startingSequence, returnSequenceLength) {
// 	var newSequence = startingSequence;
// 	var startingIndex = 0;
//  	while (newSequence.length < returnSequenceLength) {
//  		var endingIndex = startingIndex + startingSequence.length;
//  		var newEntry = 0;
//  		for (var i = startingIndex; i < endingIndex - startingIndex; i++) {
//  			newEntry += newSequence[i];
//  		}
//  		newSequence.push(newEntry);
//  		startingIndex++;
//  	}
//  	console.log(newSequence);
//  	return newSequence;
// }

// function xbonacci(startingSequence, returnSequenceLength) {

// 	//define new, growing sequence
// 	var newSequence = startingSequence;

// 	//define this outside of the funciton so that it doesn't 
// 	var startingIndex = 0;

// 	//return when we have the final, expected length
//  	while (newSequence.length < returnSequenceLength) {

//  		//this will be the final index, since we are always counting from final - n to final
//  		var endingIndex = newSequence.length;

//  		//find the new value
//  		var newEntry = 0;
//  		for (var i = startingIndex; i < endingIndex; i++) {
//  			newEntry += newSequence[i];
//  		}

//  		//add to end of newsequence arr
//  		newSequence.push(newEntry);

//  		//push starting sequence up by 1
//  		startingIndex++;
//  	}
//  	console.log(newSequence);
//  	return newSequence;
// }

// xbonacci([1, 1], 5) //=> [1, 1, 2, 3, 5]
// xbonacci([1, 1, 1], 6) //=> [1, 1, 1, 3, 5, 9]
// xbonacci([1, 1, 1, 1], 8) //=> [1, 1, 1, 1, 4, 7, 13, 25]
// xbonacci([1, 1, 1, 1, 1, 1], 10) //=> [1, 1, 1, 1, 1, 1, 6, 11, 21, 41]
// xbonacci([0, 0, 0, 0, 1], 10) //=> [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]

/*
#  Cupcake Solver
#------------------------------------------------------------------------------
# It's Jennifer's birthday today. Jennifer's mom decided to bake different kinds
# of cupcakes for Jennifer's first grade class.  Everybody needs to have an equal
# amount of the different kinds of cupcakes.
# Write a method that takes an array of the counts of the different kinds of
# cupcakes and the number of students in the class, and returns
# the total number of cupcakes that each student in the class
# should get.
# Every student should have equal amounts of the same kind of cupcake.
# No student gets to have more cupcakes than the others.  There can be leftover
# cupcakes.
# An array of [1, 2, 3] means that there's one red velvet cupcake,
# two vanilla cupcakes, and three chocolate cupcakes.
# Example: cupcakeSolver([10, 10, 10], 5) => 6  means that there are five
# students in the class, and each student gets to eat six cupcakes, total.
# Examples:
# cupcakeSolver([10, 10, 10], 5) => 6
# cupcakeSolver([25, 27, 30], 5) => 16
# cupcakeSolver([32, 27, 28], 20) => 3
# cupcakeSolver([32, 27, 28, 24], 20) => 4
*/

// function cupcakeSolver(cupcakeCounts, numStudents) {
// 	var oneStudentTotal = 0;
// 	cupcakeCounts.forEach(function(ele, i, arr) {
// 		oneStudentTotal += (Math.floor(ele/numStudents));
// 	})
// 	console.log(oneStudentTotal);
// 	return oneStudentTotal;
// }

// cupcakeSolver([10, 10, 10], 5) //=> 6
// cupcakeSolver([25, 27, 30], 5) //=> 16
// cupcakeSolver([32, 27, 28], 20) //=> 3
// cupcakeSolver([32, 27, 28, 24], 20) //=> 4