function humanReadable(seconds) {
  var rem_secs = seconds

  var hours = Math.floor(rem_secs / (60*60))
  rem_secs -= ((60*60)*hours)

  var minutes = Math.floor(rem_secs / 60)
  rem_secs -= (60*minutes)

  hours = hours < 10 ? "0" + String(hours) : String(hours);
  minutes = minutes < 10 ? "0" + String(minutes) : String(minutes);
  rem_secs = rem_secs < 10 ? "0" + String(rem_secs) : String (rem_secs);

  return [hours, minutes, rem_secs].join(":")

}

console.log(humanReadable(60))
