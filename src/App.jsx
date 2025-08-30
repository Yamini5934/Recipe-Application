import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import IngredientInput from "./components/IngredientInput";
import Favorites from "./components/Favorites";
import "./App.css";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  // ✅ Toggle Favorites (add/remove in one place)
  const toggleFavorite = (recipe) => {
    if (favorites.some((fav) => fav.name === recipe.name)) {
      // If already in favorites → remove it
      setFavorites(favorites.filter((fav) => fav.name !== recipe.name));
    } else {
      // If not in favorites → add it
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="app-container">
      {/* 🔹 Header */}
      <header className="app-header">
        🍳 Smart Recipe Generator
      </header>

      {/* 🔹 Search / Ingredients Input */}
      <div className="recipe-section">
        {!selectedRecipe && (
          <IngredientInput setSearchQuery={setSearchQuery} />
        )}

        {/* 🔹 Recipe List OR Recipe Detail */}
        {selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
            onToggleFavorite={toggleFavorite} // ✅ updated
            isFavorite={favorites.some((fav) => fav.name === selectedRecipe.name)} // ✅ pass favorite state
          />
        ) : (
          <RecipeList
            searchQuery={searchQuery}
            onRecipeClick={setSelectedRecipe}
            onToggleFavorite={toggleFavorite} // ✅ updated
            favorites={favorites}
          />
        )}
      </div>

      {/* 🔹 Favorites Section */}
      <Favorites
        favorites={favorites}
        removeFromFavorites={toggleFavorite} // ✅ can reuse toggle
      />

      {/* 🔹 Footer */}
      <footer className="app-footer">
        Made with ❤️ by Yamini | Smart Recipe Generator © 2025
      </footer>
    </div>
  );
};

export default App;
