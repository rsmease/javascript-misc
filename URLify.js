//O(n) time
//O(n) space
function URLify(string, stringLength) {
    let resultingString = "";
    for (var i = 0; i < string.length; i++) {
        let currentChar = string.charAt(i);
        resultingString += currentChar === " " ? "%20" : currentChar;
    }
    return resultingString;
}

console.log(URLify("There were willows at the lake."));