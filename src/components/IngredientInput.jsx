import React, { useState } from "react";
import "./IngredientInput.css"; // ✅ import the correct CSS

const IngredientInput = ({ setSearchQuery }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearchQuery(input.toLowerCase().trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="ingredient-input"> {/* ✅ class matches CSS */}
      <input
        type="text"
        placeholder="Search recipes by ingredients (e.g. rice, paneer, potato)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default IngredientInput;
