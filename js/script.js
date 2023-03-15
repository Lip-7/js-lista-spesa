const carbonaraIngredients = ["spaghetti", "guanciale", "eggs", "pecorino romano", "black pepper"];
const lasagnaIngredients = ["lasagna noodles", "ground beef", "onion", "garlic", "tomato sauce", "diced tomatoes", "Italian seasoning", "salt", "black pepper", "ricotta cheese", "mozzarella cheese", "Parmesan cheese", "egg", "fresh parsley"];
const pizzaIngredients = ["pizza dough", "tomato sauce", "mozzarella cheese", "toppings (e.g. pepperoni, mushrooms, onions, peppers, olives, etc.)", "oregano", "garlic powder", "red pepper flakes", "olive oil"];
const sushiIngredients = ["sushi rice", "rice vinegar", "sugar", "salt", "nori sheets", "sashimi-grade fish", "avocado", "cucumber", "carrots", "cream cheese", "soy sauce", "wasabi", "pickled ginger"];
const aranciniIngredients = ["arborio rice", "chicken or vegetable broth", "Parmesan cheese", "mozzarella cheese", "bread crumbs", "eggs", "onion", "garlic", "tomato sauce", "peas", "cooked ham or prosciutto", "saffron (optional)", "vegetable oil for frying"];
const noodleIngredients = ["noodles (e.g. ramen, soba, udon)", "soy sauce", "sesame oil", "rice vinegar", "garlic", "ginger", "green onions", "bean sprouts", "carrots", "broccoli", "mushrooms", "tofu", "chicken or beef (optional)", "vegetable oil for stir-frying"];


document.getElementById('carbonaraBtn').addEventListener('click', () =>{generateLi(carbonaraIngredients, "carbonaraRecipe", "carbonaraSection")})
document.getElementById('lasagnaBtn').addEventListener('click', () =>{generateLi(lasagnaIngredients, "lasagnaRecipe", "lasagnaSection")})
document.getElementById('pizzaBtn').addEventListener('click', () =>{generateLi(pizzaIngredients, "pizzaRecipe", "pizzaSection")})
document.getElementById('sushiBtn').addEventListener('click', () =>{generateLi(sushiIngredients, "sushiRecipe", "sushiSection")})
document.getElementById('aranciniBtn').addEventListener('click', () =>{generateLi(aranciniIngredients, "aranciniRecipe", "aranciniSection")})
document.getElementById('noodlesBtn').addEventListener('click', () =>{generateLi(noodleIngredients, "noodlesRecipe", "noodlesSection")})

