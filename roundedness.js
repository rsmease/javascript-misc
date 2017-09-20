// function increaseNumberRoundness(n) {
//     var nString = n.toString().split("").map(Number);
//     console.log(nString);
//     for (var i = nString.length - 1; i >= 1; i--) {
//         if (!(nString[i] === 0)) {
//             console.log(nString[i]);
//             for (var j = 0; j < i; j++) {

//                 if (nString[j] === 0) {
//                     return true;
//                 }
//             }
//             return false;
//         }
//     }
// }

function increaseNumberRoundness(n) {
    var foundNonzero = false;
    while (n > 0) {
        if (n % 10 === 0 && foundNonzero) {
            return true;
        } else if (n % 10 !== 0) {
            foundNonzero = true;
        }
        n = Math.floor(n/10);
    }
    return false;
}

console.log(increaseNumberRoundness(1420350))