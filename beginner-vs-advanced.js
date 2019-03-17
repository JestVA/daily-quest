// Advanced coder:

const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )

// Beginner coder: 

const cakes = (recipe, available) => {
        
    let sortedRecipe = Object.keys(recipe).sort().reduce((accumulator, currentValue) => {
    accumulator[currentValue] = recipe[currentValue];
    return accumulator;
    }, {})

    for (let ingredient in available) {
        if (!recipe.hasOwnProperty(ingredient)) {
        delete available[ingredient]
        }
    }

    let sortedAvailable = Object.keys(available).sort().reduce((accumulator, currentValue) => {
    accumulator[currentValue] = available[currentValue];
    return accumulator;
    }, {})

    let checkKeysRecipe = Object.keys(sortedRecipe)
    let checkKeysAvailable = Object.keys(sortedAvailable)  

    let checkRecipeQty = Object.values(sortedRecipe)
    let checkIngredientQty = Object.values(sortedAvailable) 

    return checkKeysRecipe
        .every(ingredient => checkKeysAvailable.includes(ingredient)) === true ? 
        Math.floor(Math.min(...checkIngredientQty.map((qty, index) => qty / checkRecipeQty[index]).filter(number => number === number))) 
        : 0
}