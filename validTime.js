function validTime(time) {
    
    var timeSplit = time.split(":");
    var hour = parseInt(timeSplit[0]);
    var minutes = parseInt(timeSplit[1]);
    
    if (hour > -1 && hour < 25 && minutes > -1 && minutes < 61) {
        return true; 
    } else {
        return false;
    }
}

console.log(validTime("24:00"))