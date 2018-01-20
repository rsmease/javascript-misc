//cryptairthm: mathematical puzzle where you find the corresp. 
//between letters, digits, wherein mathematical operation holds 
//for all letters converted to digits

function isCryptSolution(crypt, solution) {

    //O(n) space;
    //O(n) time;
    const solutionHash = {};
    solution.forEach((pair) => (solutionHash[pair[0]] = pair[1]));

    //O(n) space;
    //O(n) time;
    const firstWord = crypt[0].split("")
        .map(letter => solutionHash[letter]);
    const secondWord = crypt[1].split("")
        .map(letter => solutionHash[letter]);
    const finalWord = crypt[2].split("")
        .map(letter => solutionHash[letter]);

    //O(1) time
    if (firstWord.length > 1 && firstWord[0] === '0' ||
        secondWord.length > 1 && secondWord[0] === '0' ||
        finalWord.length > 1 && finalWord[0] === '0') {
        return false;
    }

    //O(n) time
    const firstWordVal = parseInt(firstWord.join(""));
    const secondWordVal = parseInt(secondWord.join(""));
    const combinedVal = firstWordVal + secondWordVal;

    const finalWordVal = parseInt(finalWord.join(""));

    //O(1) time
    return finalWordVal === combinedVal;

}

const crypt1 = ["SEND",
    "MORE",
    "MONEY"
];
const solution1 = [
    ["O", "0"],
    ["M", "1"],
    ["Y", "2"],
    ["E", "5"],
    ["N", "6"],
    ["D", "7"],
    ["R", "8"],
    ["S", "9"]
];

console.log(isCryptSolution(crypt1, solution1));