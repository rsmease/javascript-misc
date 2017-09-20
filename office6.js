// Learning to code around you full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

// Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

// To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// val=your value to the organisation
// happ=her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string 'x'.

// Note that if x contains three incidences of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.
// Test.describe("Example tests",_=>{
// Test.assertEquals(sabb('Can I have a sabbatical?', 5, 5), 'Sabbatical! Boom!');
// Test.assertEquals(sabb('Why are you shouting?', 7, 2), 'Back to your desk, boy.'); 
// Test.assertEquals(sabb('What do you mean I cant learn to code??', 8, 9), 'Sabbatical! Boom!'); 
// Test.assertEquals(sabb('Please calm down', 9, 1), 'Back to your desk, boy.'); 
// });

function sabb(x, val, happ){
	var my_chances = val + happ;
	x.split("").forEach(function(ele) {
		if ("sabbatical".split("").indexOf(ele) !== -1) {
			my_chances++;
		}
	})
	if (my_chances > 22) {
		return "Sabbatical! Boom!"
	} else {
		return "Back to your desk, boy."
	}
}

console.log(sabb('Please calm down', 9, 1))
