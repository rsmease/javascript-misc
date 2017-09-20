function iqTest(numbers){
  numArr = numbers.split(" ").map(Number);
  console.log(numArr)
  evens = numArr.filter(function(num) { return is_even(num) })
  console.log(evens)
  if (evens.length === 1) {
    return numArr.indexOf(evens[0]) + 1
  } else {
    odds = numArr.filter(function(num) { return !(is_even(num)) })
    return numArr.indexOf(odds[0]) + 1
  }
}

function is_even(num) {
  return num % 2 === 0;
}

iqTest("2 4 7 8 10")
