function searchNames(logins) {
  logins.filter(login => login[0].split("")[-1] === "_")
}
