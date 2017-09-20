
//have to find subPalindromes of the larger string 
function buildPalindrome(str) {
    var addedLetters = 0;
    var newString = str;
    var nonPalindromicSubstring = str.length - 1;
    var palindromeStart = 0;

    for (var k = 0; k < str.length; k++) {
        var testSubstring = str.substring(k);
        if (isPalindrome(testSubstring)) {
            palindromeStart = k;
            console.log("EXISTING PALINDROMIC SUBSTR: ", testSubstring);
            break;
        }
    }

    for (var j = palindromeStart - 1; j >= 0; j--) {
        var lettertoAdd = str.charAt(j);
        if (isPalindrome(newString)) {
            break;
        } else {
            newString += lettertoAdd;
            console.log(newString);
            addedLetters++;
        }
    }
    return newString;
}

function isPalindrome(str) {
    var length = str.length;
    if (isEven(length)) {
        var firstHalf = str.substring(0, str.length/2);
        var secondHalf = str.substring(str.length/2).split("").reverse().join("");
    } else {
        var firstHalf = str.substring(0, Math.floor(str.length/2));
        var secondHalf = str.substring(Math.floor(str.length/2) + 1).split("").reverse().join("");
    }
    return firstHalf === secondHalf;
}
    
function isEven(num) {
    return num % 2 === 0;
}

console.log(buildPalindrome("aadsfaba"));


