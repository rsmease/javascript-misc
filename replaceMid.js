function replaceMiddle(arr) {
    if (isEven(arr.length)) {
    
    var mid1 = (arr.length)/2;
    var mid2 = ((arr.length)/2) + 1;
    var midSum = arr[mid1] + arr[mid2];
    
    arr[mid1] = midSum;
    console.log(arr);
    var removed = arr.splice(mid2, 1);
    return arr;
    
    
    } else {
        return arr;
    }
}

function isEven(num) {
    return (num % 2 === 0);
}

console.log(replaceMiddle([7, 2, 2, 5, 10, 7]))