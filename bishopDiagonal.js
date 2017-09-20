function bishopDiagonal(bishop1, bishop2) {

	var nums = "12345678".split("");
	var alpha = "abcdefgh".split("");

	var bishop1Arr = [alpha.indexOf(bishop1.charAt(0)), nums.indexOf(bishop1.charAt(1))];
	var bishop2Arr = [alpha.indexOf(bishop2.charAt(0)), nums.indexOf(bishop2.charAt(1))];

	// console.log(areDiagonal(bishop1Arr, bishop2Arr));

	var newPositions = [];
	if (areDiagonal(bishop1Arr, bishop2Arr)) {
		if (bishop1Arr[0] > bishop2Arr[0] && bishop1Arr[1] > bishop2Arr[1]) {
			console.log("TEST 1");
			while(true) {
				if ((bishop1Arr[0] === 7 || bishop1Arr[1] === 7)) {
					break;
				} else {
					bishop1Arr[0]++;
					bishop1Arr[1]++;
				}
			}
			newPositions.push(alpha[bishop1Arr[0]] + nums[bishop1Arr[1]]);
			while(true) {
				if ((bishop2Arr[0] === 0 || bishop2Arr[1] === 0)) {
					break;
				} else {
					bishop2Arr[0]--;
					bishop2Arr[1]--;
				}
			}
			newPositions.push(alpha[bishop2Arr[0]] + nums[bishop2Arr[1]])
		} else if (bishop1Arr[0] < bishop2Arr[0] && bishop1Arr[1] < bishop2Arr[1]) {
			console.log("TEST 2");
			while(true) {
				if ((bishop1Arr[0] === 0 || bishop1Arr[1] === 0)) {
					break;
				} else {
					bishop1Arr[0]--;
					bishop1Arr[1]--;
				}
			}
			newPositions.push(alpha[bishop1Arr[0]] + nums[bishop1Arr[1]]);
			while(true) {
				if ((bishop2Arr[0] === 7 || bishop2Arr[1] === 7)) {
					break;
				} else {
					bishop2Arr[0]++;
					bishop2Arr[1]++;
				}
			}
			newPositions.push(alpha[bishop2Arr[0]] + nums[bishop2Arr[1]]);
		} else if (bishop1Arr[0] < bishop2Arr[0] && bishop1Arr[1] > bishop2Arr[1]) {
			console.log("TEST 3");
			while(true) {
				if ((bishop1Arr[0] === 0 || bishop1Arr[1] === 7)) {
					break;
				} else {
					bishop1Arr[0]--;
					bishop1Arr[1]++;
				}
			}
			newPositions.push(alpha[bishop1Arr[0]] + nums[bishop1Arr[1]]);
			while(true) {
				if ((bishop2Arr[0] === 7 || bishop2Arr[1] === 0)) {
					break;
				} else {
					bishop2Arr[0]++;
					bishop2Arr[1]--;
				}
			}
			newPositions.push(alpha[bishop2Arr[0]] + nums[bishop2Arr[1]]);
		} else {
			console.log("TEST 4");
			while(true) {
				if ((bishop1Arr[0] === 7 || bishop1Arr[1] === 0)) {
					break;
				} else {
					bishop1Arr[0]++;
					bishop1Arr[1]--;
				}
			}
			newPositions.push(alpha[bishop1Arr[0]] + nums[bishop1Arr[1]]);
			while(true) {
				if ((bishop2Arr[0] === 0 || bishop2Arr[1] === 7)) {
					break;
				} else {
					bishop2Arr[0]--;
					bishop2Arr[1]++;
				}
			}
			newPositions.push(alpha[bishop2Arr[0]] + nums[bishop2Arr[1]]);
		}
		return newPositions.sort();
	} else {
		newPositions.push(bishop1)
		newPositions.push(bishop2);
		return newPositions.sort();
	}

}

function areDiagonal(bishop1Arr, bishop2Arr) {
	var variance1 = Math.abs(bishop1Arr[0] - bishop2Arr[0]);
	var variance2 = Math.abs(bishop1Arr[1] - bishop2Arr[1]);
	return (variance1 === variance2);
}

console.log(bishopDiagonal("b4", "e7"));