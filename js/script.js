const carbonaraIngredients = ["spaghetti", "guanciale", "eggs", "pecorino romano", "black pepper"];
document.getElementById('carbonaraBtn').addEventListener('click', () =>{
    let iterable = 0;
    const listToAppend = document.getElementById('carbonaraRecipe')
    while (iterable < carbonaraIngredients.length){
        const ingredient = document.createElement('li')
        ingredient.innerText = carbonaraIngredients[iterable];
        listToAppend.appendChild(ingredient);
        iterable++;
    }
    switchVisibility('chooseRecipe', 'recipes-section')
})