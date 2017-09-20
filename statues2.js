function makeArrayConsecutive2(statues) {
    var sizeStatuary = arrMax(statues) - arrMin(statues) + 1;
    return sizeStatuary - statues.length; 
}


function arrMax(arr) {
    return Math.max.apply(null, arr);
}

function arrMin(arr) {
    return Math.min.apply(null, arr);
}

// console.log(arrMax([2, 5, 1, 8]))
console.log(makeArrayConsecutive2([2, 5, 1, 8]));
