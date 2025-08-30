// src/components/FilterPanel.jsx
import React, { useState } from "react";
import "./FilterPanel.css";

const FilterPanel = ({ allIngredients, onSearch }) => {
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    let updated;
    if (selectedIngredients.includes(ingredient)) {
      updated = selectedIngredients.filter((i) => i !== ingredient);
    } else {
      updated = [...selectedIngredients, ingredient];
    }
    setSelectedIngredients(updated);
  };

  const handleSearch = () => {
    onSearch({ diet: selectedDiet, ingredients: selectedIngredients });
  };

  return (
    <div className="filter-panel">
      <h2>🍴 Find Recipes</h2>

      {/* Diet Selection */}
      <div className="diet-select">
        <label>Dietary Preference:</label>
        <select
          value={selectedDiet}
          onChange={(e) => setSelectedDiet(e.target.value)}
        >
          <option value="">Any</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="non-veg">Non-Veg</option>
          <option value="gluten-free">Gluten Free</option>
        </select>
      </div>

      {/* Ingredient Selection */}
      <div className="ingredient-select">
        <h3>🧂 Select Ingredients</h3>
        <div className="ingredient-list">
          {allIngredients.map((ingredient, idx) => (
            <button
              key={idx}
              className={`ingredient-btn ${
                selectedIngredients.includes(ingredient) ? "active" : ""
              }`}
              onClick={() => toggleIngredient(ingredient)}
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <button className="search-btn" onClick={handleSearch}>
        🔍 Search Recipes
      </button>
    </div>
  );
};

export default FilterPanel;
