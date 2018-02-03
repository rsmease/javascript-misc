function palindromePermutation(string1) {
    const letterFrequency = {};
    //O(n) time
    //O(n) additional space
    for (var i = 0; i < string1.length; i++) {
        let currentChar = string1.charAt(i);
        if (letterFrequency[currentChar]) {
            letterFrequency[currentChar]++;
        } else {
            letterFrequency[currentChar] = 1;
        }
    }
    //O(n) time
    //O(n) space
    let appearances = Object.values(letterFrequency);
    //O(n) time
    //O(1) space
    if (string1.length % 2 === 0) {
        return allEven(appearances);
    } else {
        return allButOneEven(appearances);
    }
}


//O(n) where N is length of array
//O(1) additional space
function allEven(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

//O(n) where n is length of array
//O(1) additional space
function allButOneEven(array) {
    let oddFlag = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0 && oddFlag) {
            return false;
        } else if (array[i] % 2 !== 0) {
            oddFlag = true;
        }
    }
    return true;
}