process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function isBalanced(s) {
    let input = s.split('\n');
    let numTests = input.unshift();

    for (let i = 0; i < numTests; i++) {
        const currentTest = input[i].split("");
        const openingBrackets = ["{", "[", "("]
        const closingBrackets = ["}", "]", ")"]

        const bracketStack = [];
        let status;
        for (let j = 0; j < currentTest.length; j++) {
            let currentBracket = currentTest[j];
            if (openingBrackets.includes(currentBracket)) {
                bracketStack.push(currentBracket);
            } else {
                const lastOpeningBracket = bracketStack.pop();
                if (openingBrackets.indexOf(lastOpeningBracket) !== closingBrackets.indexOf(currentBracket)) {
                    status = 'NO';
                    break;
                }
            }
        }
        status = status ? status : "YES";
        if (bracketStack.length) {
            status = "NO"
        }
        return status;
    }
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var s = readLine();
        var result = isBalanced(s);
        process.stdout.write("" + result + "\n");
    }

}