import React, { useState } from "react";
import "./IngredientInput.css";

function IngredientInput({ ingredients, addIngredient, searchRecipes }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addIngredient(input.trim());
      setInput("");
    }
  };

  return (
    <div className="ingredient-input">
      <input
        type="text"
        placeholder="Enter an ingredient..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>➕ Add</button>
      <button className="search-btn" onClick={searchRecipes}>🔍 Search</button>

      <div className="ingredient-list">
        {ingredients.map((ing, idx) => (
          <span key={idx} className="ingredient-tag">{ing}</span>
        ))}
      </div>
    </div>
  );
}

export default IngredientInput;
