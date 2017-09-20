function dirReduc(arr){

  //gather frequency of each movement for balancing
  directionalFrequencies = {"NORTH":0, "SOUTH":0, "EAST":0, "WEST":0};
  arr.forEach(function(direction) {
      if (direction in directionalFrequencies) {
        directionalFrequencies[direction]++;
      } else {
        directionalFrequencies[direction] = 1;
      }
  })

  // console.log(directionalFrequencies)

  //balance out cancelling directions
  bipolarDirectionalFrequencies = {}

  if (directionalFrequencies["NORTH"] >
      directionalFrequencies["SOUTH"]) {
        bipolarDirectionalFrequencies["NORTH"] =
        directionalFrequencies["NORTH"] -
            directionalFrequencies["SOUTH"]
  } else if (directionalFrequencies["SOUTH"] >
      directionalFrequencies["NORTH"]) {
        bipolarDirectionalFrequencies["SOUTH"] =
        directionalFrequencies["SOUTH"] -
            directionalFrequencies["NORTH"]
  }

  if (directionalFrequencies["WEST"] >
      directionalFrequencies["EAST"]) {
        bipolarDirectionalFrequencies["WEST"] =
        directionalFrequencies["WEST"] -
            directionalFrequencies["EAST"]
  } else if (directionalFrequencies["EAST"] >
      directionalFrequencies["WEST"]) {
        bipolarDirectionalFrequencies["EAST"] =
        directionalFrequencies["EAST"] -
            directionalFrequencies["WEST"]
  }

  // console.log(bipolarDirectionalFrequencies)

  //select not-cancelled ("efficient") movements from arr in-place
  efficientMovements = []
  arr.forEach(function(direction) {
    if (direction in bipolarDirectionalFrequencies &&
        bipolarDirectionalFrequencies[direction] > 0) {
          efficientMovements.push(direction);
          bipolarDirectionalFrequencies[direction]--;
        }
  })

  return efficientMovements;

}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
