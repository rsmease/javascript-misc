function tickets(peopleInLine){
  availableChange = {"25" : 0, "50" : 0};

  peopleInLine.forEach(function(purchase) {
      result = "YES"
      if (purchase === 25) {
        availableChange["25"]++;
      } else if (purchase == 50) {
        if (availableChange["25"] > 0) {
          availableChange["50"]++;
          availableChange["25"]--;
        } else {
          result = "NO";
        }
      } else {
        if (availableChange["25"] > 0 && availableChange["50"] > 0) {
          availableChange["25"]--;
          availableChange["50"]--;
        } else if (availableChange["25"] > 2) {
          availableChange["25"] -= 3;
        } else {
          result = "NO";
        }
      }
  })
  return result;
}

console.log(tickets([25, 100]))
