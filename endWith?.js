function solution(str, ending){
  var strEnd = str.substring(str.length - ending.length)
  return ending === strEnd
}
