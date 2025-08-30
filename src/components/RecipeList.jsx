import React from "react";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";  // ✅ use RecipeCard
import "./RecipeList.css";

const RecipeList = ({ searchQuery, onRecipeClick, onToggleFavorite, favorites }) => {
  // Split search query into multiple ingredients
  const queryIngredients = searchQuery
    .toLowerCase()
    .split(",") // allow comma separation
    .join(" ") // replace commas with spaces
    .split(" ") // split by spaces
    .filter((ing) => ing.trim() !== ""); // remove empty strings

  const filteredRecipes =
    queryIngredients.length === 0
      ? recipes // show all if nothing searched
      : recipes.filter((recipe) =>
          // check if ALL query ingredients are present in recipe
          queryIngredients.every((q) =>
            recipe.ingredients.some((ing) =>
              ing.toLowerCase().includes(q)
            )
          )
        );

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => onRecipeClick(recipe)}
            onToggleFavorite={onToggleFavorite}   // ✅ FIXED: renamed prop
            isFavorite={favorites.some((fav) => fav.name === recipe.name)} // ✅ boolean
          />
        ))
      ) : (
        <p className="no-results">No recipes found. Try different ingredients!</p>
      )}
    </div>
  );
};

export default RecipeList;
