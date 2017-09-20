function weakNumbers(n) {
	var divisors = [];
	for (var i = 1; i <= n; i++) {
		var currentDivisorCount = divisorCount(i);
		divisors.push(currentDivisorCount);

	}
	return weaknessCount(divisors);

}

function isEven(n) {
	return n % 2 === 0;
}

function divisorCount(num) {
	var count = 0;
	if (isEven(num)) {
		for (var i = 1; i <= num; i++) {
			if (num % i === 0) {
				count++;
			}
		}
	} else {
		for (var i = 1; i <= num; i+= 2) {
			if (num % i === 0) {
				count++;
			}
		}
	}
	return count;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function weaknessCount(arr) {
	var weaknessArr = [];
	for (var i = 0; i <= arr.length; i+= 2) {
		var currentWeakness = 0;
		for (var j = 0; j <= i; j++) {
			if (arr[j] > arr[i]) {
				currentWeakness++;
			}
		}
		weaknessArr.push(currentWeakness);
	}
	var result = [];
	var maxWeakness = getMaxOfArray(weaknessArr);
	result.push(maxWeakness);
	var maxCount = 0;
	if (maxWeakness === 0) {
		result.push(arr.length);
	} else {
		weaknessArr.forEach(function(ele, i, arr) {
		if (ele === maxWeakness) {
			maxCount++;
		}
		})
		result.push(maxCount);
	}
	return result;
}

console.log(weakNumbers(4));