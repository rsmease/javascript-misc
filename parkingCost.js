// A new parking lot just opened in your city. Its rates are:

// - The first 30 minutes (inclusive) of parking are free;
// - From 31 minutes to 2 hours, every 10 minutes costs $1;
// - Every 10 minutes over 2 hours costs $2.
// 
// Since you are charged for every 10 minutes, you should round the number of minutes spent in the parking lot up to the nearest multiple of 10. For example, if you've been in the parking lot for 43 minutes, you will pay for 50 minutes.

// You are given 2 strings: The time you typically arrive at your usual parking lot, and the time you typically leave it. Now you want to know how much you'll have to pay at the new parking lot.
// If timeOut is earlier than timeIn, you can assume that timeOut is on the next day.
// Input/Output
// [input] string timeIn
// The time you usually arrive at the parking lot, in the format hh:mm.
// [input] string timeOut
// The time you usually leave the parking lot, in the format hh:mm.
// [output] an integer
// The number of dollars you'll need to pay.
// Example
var timeIn1 = "14:11"
var timeOut1 = "14:39"// the output should be 0.
// You usually spend 28 minutes in the parking lot, so you won't have to pay anything.
var timeIn2 = "07:02"
var timeOut2 = "07:42"
// You spend 40 minutes in the parking lot, so you'll need to pay for the first 10 minutes after the free half hour.
var timeIn3 = "12:20"
var timeOut3 = "14:54"
// You spend 2 hours and 34 minutes in the parking lot, so you'll need to pay $9 for the first 2 hours (there are 90 minutes between 30 minutes and 2 hours, each 10 minutes of which cost $1) and 4 * 2 = $8 for the next 34 minutes, for a total of 8 + 9 = 17.
var timeIn4 = "23:50"
var timeOut4 = "00:30"
// You spend 40 minutes in the parking lot, so you'll need to pay for the first 10 minutes after the free half hour.

function parkingCost(timeIn, timeOut) {
  //coding and coding..
  var timeInInt = timeIn.split(":").map(Number)
  var timeOutInt = timeOut.split(":").map(Number)

  if (timeInInt[0] === 0) {
  	timeInInt[0] = 24;
  }
  if (timeOutInt[0] === 0) {
  	timeOutInt[0] = 24;
  }

  if (timeInInt[0] > timeOutInt[0]) {
  	timeOutInt[0] += 24;
  }

  if (timeInInt[0] === timeOutInt[0] && timeInInt[1] > timeOutInt[1]) {
  	timeOutInt[0] += 24;
  }



  var totalMinutes = 0

  //calculate hours
  if (timeInInt[0] > timeOutInt[0]) {
  	totalMinutes += (24-timeInInt[0] * 60) + timeOutInt[0] * 60
  } else {
  	totalMinutes += (timeOutInt[0] - timeInInt[0]) * 60
  }

  //calculate minutes
  if (timeInInt[1] > timeOutInt[1]) {
  	totalMinutes += (60-timeInInt[1]) + timeOutInt[1]
  	if (timeInInt[0] < timeOutInt[0]) {
  		totalMinutes -= 60
  	}
  } else {
  	totalMinutes += (timeOutInt[1] - timeInInt[1])
  }

  var totalCost = 0;
  if (totalMinutes > 30) {
  	if (totalMinutes <= 120) {
  		totalMinutes -= 30
  		totalCost += 1 * Math.ceil(totalMinutes / 10)
  	} else {
  		totalMinutes -= 120
  		totalCost += 9
  		totalCost += 2 * Math.ceil(totalMinutes / 10)
  	}
  }
  console.log(totalCost)
  return totalCost

}

parkingCost("07:41", "05:13")