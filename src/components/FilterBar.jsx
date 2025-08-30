import React from "react";
import "./FilterBar.css";

function FilterBar({
  selectedDiet,
  onDietChange,
  selectedIngredients,
  onIngredientToggle,
  onSearch,
}) {
  const ingredients = [
    "Tomato",
    "Potato",
    "Onion",
    "Garlic",
    "Cheese",
    "Chicken",
    "Paneer",
    "Rice",
    "Wheat",
    "Milk",
    "Egg",
    "Spinach",
  ];

  return (
    <div className="filter-bar">
      <h2>Find Your Perfect Recipe 🍽️</h2>

      {/* Dietary Filter */}
      <div className="diet-section">
        <label>Choose Diet:</label>
        <select
          value={selectedDiet}
          onChange={(e) => onDietChange(e.target.value)}
        >
          <option value="Any">Any</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Keto">Keto</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
      </div>

      {/* Ingredients */}
      <div className="ingredients-container">
        {ingredients.map((ing) => (
          <button
            key={ing}
            className={`ingredient-btn ${
              selectedIngredients.includes(ing) ? "selected" : ""
            }`}
            onClick={() => onIngredientToggle(ing)}
          >
            {ing}
          </button>
        ))}
      </div>

      {/* Search Button */}
      <button className="search-btn" onClick={onSearch}>
        🔍 Search Recipes
      </button>
    </div>
  );
}

export default FilterBar;
