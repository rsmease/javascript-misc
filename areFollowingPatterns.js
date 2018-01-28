function areFollowingPatterns(strings, patterns) {
    const stringsObject = {};
    const patternsObject = {};

    for (var i = 0; i < strings.length; i++) {
        let currentString = strings[i];
        let currentPattern = patterns[i];

        stringsObject[currentString] = stringsObject[currentString] || i.toString();
        patternsObject[currentPattern] = patternsObject[currentPattern] || i.toString();

        if (stringsObject[currentString] !== patternsObject[currentPattern]) {
            return false;
        } else {
            stringsObject[currentString] += i.toString();
            patternsObject[currentPattern] += i.toString();
        }
    }
    return true;

}