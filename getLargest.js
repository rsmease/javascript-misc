function largest(n,xs){
  if (n === 0) { return [] };
  return xs.sort((a, b) => a - b).slice(-n);
}
