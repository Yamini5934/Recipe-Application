import React from "react";
import "./Favorites.css";

const Favorites = ({ favorites, removeFromFavorites, onViewRecipe }) => {
  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <h2>⭐ Favorites</h2>
        <p className="empty-message">No favorites added yet!</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h2>⭐ Favorites</h2>
      <div className="favorites-list">
        {favorites.map((recipe, index) => (
          <div key={index} className="favorite-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="favorite-image"
            />
            <div className="favorite-details">
              <h3>{recipe.name}</h3>
              <div className="favorite-actions">
                {/* 👀 View Recipe */}
                <button
                  className="view-btn"
                  onClick={() => onViewRecipe(recipe)}
                >
                  👀 View
                </button>
                {/* ❌ Remove */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(recipe)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
