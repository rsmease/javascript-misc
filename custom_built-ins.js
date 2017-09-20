Array.prototype.all = function (p) {
  // TODO: Implement this function
  areTrue = this.filter(p);
  return this.length === areTrue.length;
};

Array.prototype.none = function (p) {
  // TODO: Implement this function
  areTrue = this.filter(p);
  return areTrue.length === 0;
};

Array.prototype.any = function (p) {
  // TODO: Implement this function
  areTrue = this.filter(p);
  return areTrue.length >= 1;
};