function toCamelCase(str){
  var split = str.includes("-") ? str.split("-") : str.split("_");
  var camelCase = split.map(s => s.substring(0,1).toUpperCase() +
                                 s.substring(1).toLowerCase()).join("");

  var first = str.substring(0,1)
  if (first.toLowerCase() === first.substring(0,1)) {
    camelCase = camelCase.substring(0,1).toLowerCase() +
                camelCase.substring(1);
  }

  return camelCase;
}

console.log(toCamelCase("this-is-my-sample"))
