function consecutive(num) {
  //thought process
  //we could check all the subsets, but that's something like O(num ** num)... ugly
  //we need to find patterns that reduce the work that we do

  //pattern 1: we only need to think about 1..Math.ceil(num/2), because (Math.ceil(num/2) + (Math.ceil(num/2) + 1)) > num
  //——————————————————————————-
  //pattern 2: we only need to consider ranges of a certain size,
  //i.e. largest consecutive range ('window') of numbers will always be <= 1..end where
  //sum(1..end) >= num, since 2..end+1 > num && 1..end+1 > num
  //——————————————————————————-
  //pattern 3: when we find a sum that is >= num, we can start the next cycle at the lower end of that window + 1
  //if (4, 5, 6) === 15, then (4, 5) won't equal 15

  //build maxWindowRange
  let maxWindowRange = 0;
  let buildMaxWindow = 0;
  while (buildMaxWindow < num) {
    maxWindowRange++;
    buildMaxWindow += maxWindowRange;
  }

  //starting with the largest window, move through the valid range
  //decrease the window each time, while increasing the start
  let foundConsecutives = 0;
  let start = 1;
  for (let j = maxWindowRange; j >= 2; j--) {
    let currentSum = sumRange(start, start + (j - 1));
    if (currentSum === num) {
      start++;
      foundConsecutives++;
    } else {
      for (let k = start + 1; k + (j - 1) <= Math.ceil(num / 2); k++) {
        currentSum -= k - 1;
        currentSum += k + (j - 1);
        if (currentSum === num) {
          start = k + 1;
          foundConsecutives++;
          break;
        } else if (currentSum > num) {
          start = k;
          break;
        }
      }
    }
  }
  return foundConsecutives;
}

function sumRange(start, finish) {
  let sum = 0;
  for (let i = start; i <= finish; i++) {
    sum += i;
  }
  return sum;
}

console.log(consecutive(15));
