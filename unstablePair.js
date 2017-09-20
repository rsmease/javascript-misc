function isUnstablePair(filename1, filename2) {
    filename1Lower = filename1.toLowerCase();
    filename2Lower = filename2.toLowerCase();
    shorterFileLen = Math.min(filename1.length, filename2.length);
    falseFriendCount = 0;
    
    for (var i = 0; i < shorterFileLen; i++) {
        if (filename1.charCodeAt(i) !== filename2.charCodeAt(i)) {
            var current1char = filename1.charCodeAt(i);
            var current2char = filename2.charCodeAt(i);
            var current1charLower = filename1Lower.charCodeAt(i);
            var current2charLower = filename2Lower.charCodeAt(i);
            if (current1char < current2char && current1charLower > current2char) {
                return true;
            } else if (current1char > current2char && current1charLower < current2char) {
                return true;
            } else if (current1char < current2char && current1char > current2charLower) {
                return true;
            } else if (current1char > current2char && current1char < current2charLower) {
                return true;
            } else if (i === shorterFileLen - 1 && falseFriendCount === shorterFileLen -1) {
                if (filename1.length !== filename2.length) {
                    return true;
                }
            } else if (current1char === current2charLower || current1charLower === current2char){
                falseFriendCount++;
            }
        }
    }
    return false;
}

console.log(isUnstablePair("aa", "AAB"))