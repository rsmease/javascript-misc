function towerBuilder(floors) {
  var maxFloorLength = (floors - 1) * 2 + 1;
  var tower = [];

  for (var i = 0; i < floors; i++) {
    var newFloor = new Array(i * 2 + 1).fill("*");
    while (newFloor.length < maxFloorLength) {
      newFloor.unshift(" ");
      newFloor.push(" ");
    }
    tower.push(newFloor.join(""));
  }
  return tower;
}

console.log(towerBuilder(4))
