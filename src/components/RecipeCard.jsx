import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick, onToggleFavorite, isFavorite }) {
  const handleFavorite = (e) => {
    e.stopPropagation(); // ✅ Prevent card click from opening details
    onToggleFavorite(recipe); // ✅ parent handles add/remove
  };

  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      {/* 🔹 Floating favorite icon */}
      <div
        className={`fav-icon ${isFavorite ? "added" : ""}`}
        onClick={handleFavorite}
      >
        {isFavorite ? "💚" : "🤍"}
      </div>

      {/* Recipe Image */}
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />

      {/* Content */}
      <div className="recipe-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>

        {/* View Details button */}
        <button
          className="recipe-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClick(recipe);
          }}
        >
          View Details
        </button>

        {/* Add to Favorites button */}
        <button
          className={`fav-btn ${isFavorite ? "added" : ""}`}
          onClick={handleFavorite}
        >
          {isFavorite ? "Added to Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
