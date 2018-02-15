const stack = [];
const stackMax = [
    [-1, -1]
];

function processData(input) {
    const stack = [];
    const stackMaxes = [
        [-1, -1]
    ];

    let parsedInput = input.split("\n");
    for (let i = 1; i < parsedInput.length; i++) {
        let currentInput = parsedInput[i].split(" ").map(char => parseInt(char));
        if (currentInput[0] === 1) {
            //console.log(stack)
            stack.push([currentInput[1], i]);
            //console.log(stackMaxes)
            if (currentInput[1] > stackMaxes[stackMaxes.length - 1][0]) {
                stackMaxes.push([currentInput[1], i]);
            }
        } else if (currentInput[0] === 2) {
            let removedElement = stack.pop();
            if (stackMaxes[stackMaxes.length - 1][0] === removedElement[0] && removedElement[1] === stackMaxes[stackMaxes.length - 1][1]) {
                let removedMax = stackMaxes.pop();
            }
        } else if (currentInput[0] === 3) {
            console.log(stackMaxes[stackMaxes.length - 1][0]);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});