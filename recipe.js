'use strict';
function addIngredient(recipe, ingredientName, amount){
	recipe[ingredientName] = amount;
	return recipe;
}

function removeIngredient(recipe, ingredientName){
	delete recipe[ingredientName];
	return recipe;
}

function updateIngredient(recipe, ingredientName, amount){
	recipe[ingredientName] = amount;
	return recipe;
}

function readRecipe(recipe){
	for (var key in recipe){
	console.log("this recipe calls for " + recipe[key] + " of " + key);
	}
}