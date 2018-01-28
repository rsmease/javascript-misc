function groupingDishes(dishes) {
    const ingredientGrouping = {};
    dishes.sort().forEach(function (dish) {
        const dishName = dish[0];
        const ingredients = dish.slice(1);

        ingredients.forEach(function (ingredient) {
            ingredientGrouping[ingredient] = ingredientGrouping[ingredient] || [];
            ingredientGrouping[ingredient].push(dishName);
        });
    });

    const ingredientList = Object.keys(ingredientGrouping).sort();

    const result = [];
    ingredientList.forEach(function (ingredient) {
        if (ingredientGrouping[ingredient].length > 1) {
            result.push([ingredient].concat(ingredientGrouping[ingredient]));
        }
    });
    return result;
}