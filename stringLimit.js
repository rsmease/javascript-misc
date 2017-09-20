function solution(string,limit){
  if (string.length <= limit) {
    return string;
  } else {
    return string.substring(0, limit) + "..."
  }
}
