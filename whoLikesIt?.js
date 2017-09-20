function likes(names) {
  var numLikes = names.length
  if (numLikes === 0) {
    return "no one likes this"
  } else if (numLikes === 1) {
    return names[0].toString() + " likes this"
  } else if (numLikes === 2) {
    return names.join(" and ") + " like this"
  } else if (numLikes === 3) {
    return names.slice(0,2).join(", ") + " and " + names[2].toString()
            + " like this"
  } else {
    var remainingLikes = numLikes - 2;
    return names.slice(0,2).join(", ") + " and " +
            remainingLikes.toString() + " others like this"
  }
}
