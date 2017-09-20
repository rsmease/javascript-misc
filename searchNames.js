function searchNames(logins) {
  if (logins.length === 0) { return logins };
  return logins.filter(ele => endsUnderscore(ele))
}

function endsUnderscore(entry) {
  return entry[0].substring(entry[0].length - 1) === "_";
}

console.log(searchNames([[ "bar_", "bar@bar.com" ]]))
