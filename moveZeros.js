function moveZeros(arr) {
  zeros = arr.filter(ele => ele === 0);
  nonzeros = arr.filter(ele => nonZero(ele));
  return nonzeros.concat(zeros);
}

function nonZero(ele) {
  return ele != 0 || ele === false || Array.isArray(ele);
}
