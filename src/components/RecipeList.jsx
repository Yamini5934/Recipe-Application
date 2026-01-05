import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"; // ✅ same
import "./RecipeList.css";
import { fetchRecipes } from "../api/recipeApi"; // ✅ NEW

const RecipeList = ({
  searchQuery,
  onRecipeClick,
  onToggleFavorite,
  favorites,
}) => {
  const [recipes, setRecipes] = useState([]);

  // 🔹 API call once on mount (no query param)
  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes(); // fetch all recipes once
      setRecipes(data);
    };

    loadRecipes();
  }, []);

  // 🔹 Ingredient-based filtering (same as before)
  const queryIngredients = searchQuery
    .toLowerCase()
    .split(",")
    .join(" ")
    .split(" ")
    .filter((ing) => ing.trim() !== "");

  const filteredRecipes =
    queryIngredients.length === 0
      ? recipes
      : recipes.filter((recipe) =>
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
            onToggleFavorite={onToggleFavorite} // ✅ same
            isFavorite={favorites.some(
              (fav) => fav.name === recipe.name
            )}
          />
        ))
      ) : (
        <p className="no-results">
          No recipes found. Try different ingredients!
        </p>
      )}
    </div>
  );
};

export default RecipeList;
