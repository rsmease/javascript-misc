//FAILED

// Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

// If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

// For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1instead.

// Example

// For startPosition = [1, 4, 2] and speed = [27, 18, 24], the output should be
// runnersMeetings(startPosition, speed) = 3.

// In 20 seconds after the runners start running, they end up at the same point. Check out the gif below for better understanding:



// Input/Output

// [time limit] 3000ms (cs)
// [input] array.integer startPosition
// A non-empty array of integers representing starting positions of runners (in meters).

// Constraints:
// 2 ≤ startPosition.length ≤ 10,
// -1000 ≤ startPosition[i] ≤ 1000.

// [input] array.integer speed
// Array of positive integers of the same length as startPosition representing speeds of the runners (in meters per minute).

// Constraints:
// speed.length = startPosition.length,
// 1 ≤ speed[i] ≤ 30.

// [output] integer
// The maximum meeting cardinality or -1 if there will be no meetings.

function runnersMeetings(startPosition, speed) {
	var maxCardinality = -1;
	var runner1 = startPosition[0];
	var runner2 = startPosition[1];
	var runner3 = startPosition[2];
	for (var i = 0; i < 50000; i++) {
		var localCardinality = -1;
		runner1 += (speed[0]/1000);
		runner2 += (speed[1]/1000);
		runner3 += (speed[2]/100int runnersMeetings(int[] startPosition, int[] speed) {
    int result = 1;
 
    for (int i = 0; i < startPosition.Length; i++) {
        for (int j = i + 1; j < startPosition.Length; j++) {
            int distDiff = startPosition[j] - startPosition[i],
                speedDiff = speed[i] - speed[j],
                cnt = 0;
            if(speedDiff==0&&distDiff!=0)
                continue;
            for (int k = 0; k < startPosition.Length; k++) {
                if (startPosition[k] * speedDiff + speed[k] * distDiff
                    == startPosition[i] * speedDiff + speed[i] * distDiff) {            
                    cnt++;
                }
            }
 
            if (cnt==0) {
                continue;
            }
 
            if (cnt > result) {
                result = cnt;
            }
        }
    }
    if(result<2)
        result = -1;
    return result;
}0);
		if (runner1 === runner2 || runner1 === runner3 || runner2 === runner3) {
			localCardinality = 2;
		}
		if (runner1 === runner2 && runner2 === runner3) {
			localCardinality = 3;
		}
		if (localCardinality > maxCardinality) {
			maxCardinality = localCardinality;
		}
		if (maxCardinality === 3) {
			break;
		}
	}
	return maxCardinality;
}

console.log(runnersMeetings([1, 4, 2], [27, 18, 24]));