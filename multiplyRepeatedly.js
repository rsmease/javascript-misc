function multiply(x) {
    //your code here;
}

// this function lets you invoke something like multiply(3)(4)(5)() with dynamic arguments
function multiplyRepeatedly(multipliers) {
    return (multipliers.reduce((prev, arg) => {
        if (prev) {
            return prev(arg);
        }
        return multiply(arg);
    }, null))();
}

console.log(multiplyRepeatedly([3, 4, 5]));