const isSubstring = (parent, child) => parent.includes(child);

const isRotation = function(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('invalid input');
  }
  if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1 + str1, str2);
};

console.log(isRotation('child', 'ildch'));
