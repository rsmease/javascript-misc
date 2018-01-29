//check if one string is a permutation of the other;

function isPermutation(str1, str2) {
    //O(1) or O(n), depending on JS
    //Likely O(1)
    if (str1.length !== str2.length) {
        return false;
        //Another O(1) check that will make alg more efficient
    } else if (str1.length === 0) {
        return true;
    }
    let charFreqCounter = {};
    //O(a) where A is length of str1
    for (var i = 0; i < str1.length; i++) {
        const char = str1.charAt(i);
        //O(1) check
        charFreqCounter[char] = charFreqCounter[char] || 0;
        charFreqCounter[char]++;
    }
    //O(b) where B is length of str2
    for (var j = 0; j < str2.length; j++) {
        const char = str2.charAt(j);
        if (!(charFreqCounter[char])) {
            return false;
        }
        charFreqCounter[char] = charFreqCounter[char] || 0;
        charFreqCounter[char]--;
        //An O(1) check to short-circut algo for efficiency
        if (charFreqCounter[char] < 0) {
            return false;
        }
    }
    //O(C) where C is A.uniq.length;
    //A and B must have identical character sets to reach this stage
    const seenChars = Object.keys(charFreqCounter);
    //O(C) 
    seenChars.forEach(function (char) {
        if (charFreqCounter[char] !== 0) {
            return false;
        }
    });
    return true;
}

//Total time complexity? O(a+b+c) where c is max(a.uniq.length)
//Total space complexity is O(2a + 2b + c);


// console.log(isPermutation("girl", "llir"));