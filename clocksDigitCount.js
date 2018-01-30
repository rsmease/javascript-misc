//O(1) time, compare values at indices 
//O(1) space, nothing created that's proportional to input
function sameTime(startTime, finishTime) {
    return (
        startTime[0] === finishTime[0] &&
        startTime[1] === finishTime[1] &&
        startTime[2] === finishTime[2]
    );
}

//O(1) time, check and modify indices
//O(n) space, generate new array every time
function incrementTime(time) {
    const hours = time[0];
    const minutes = time[1];
    const seconds = time[2];

    if (seconds < 59) {
        return [hours, minutes, seconds + 1];
    } else if (minutes < 59) {
        return [hours, minutes + 1, 0];
    } else {
        return [hours + 1, 0, 0];
    }
}

//O(n) time, where n is number of items in time
//O(1) space, since digitsCounter is just repeatedly reassigned
function updateDigitsCounter(digitsCounter, time) {
    time.forEach(interval => {
        let temp = interval;
        if (temp < 10) {
            digitsCounter[0] += 1;
            digitsCounter[temp] += 1;
        } else {
            while (temp > 0) {
                let remainder = temp % 10;
                digitsCounter[remainder]++;

                temp = Math.floor(temp / 10);
            }
        }
    });
    return digitsCounter;
}

function clockDigitsCount(startTime, finishTime) {
    //constructed ahead of time to avoid fixing undefined indices
    //for digits that never show up
    let digitsCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    //O(n) time, where n is number of second intervals between
    //startTime and finishTime
    while (!sameTime(startTime, finishTime)) {
        digitsCounter = updateDigitsCounter(digitsCounter, startTime);
        startTime = incrementTime(startTime);
    }

    //process finishTime to meet inclusive requirement
    digitsCounter = updateDigitsCounter(digitsCounter, finishTime);

    return digitsCounter;
}

console.log(clockDigitsCount([23, 59, 58], [23, 59, 59]));
console.log(typeof []);