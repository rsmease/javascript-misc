//failed

function cakes(recipe, available) {
  var cakesMade = 0;
  var remainingIngredients = Object.assign({}, available)

  while (true) {
    for (key in recipe) {
      if (available[key] === undefined) {
        return cakesMade;
      }
      available[key] -= recipe[key];
      if (available[key] < 0) {
        return cakesMade;
      }
    }
    cakesMade++;
  }
}

var recipe1 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
var available1 = {sugar: 500, flour: 2000, milk: 2000};
