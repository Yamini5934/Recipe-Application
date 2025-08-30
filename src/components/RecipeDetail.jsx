// src/components/RecipeDetail.jsx
import React from "react";
import "./RecipeDetail.css";

const RecipeDetail = ({ recipe, searchQuery }) => {
  // Prepare query ingredients for highlighting
  const queryIngredients = searchQuery
    ? searchQuery.toLowerCase().split(/[ ,]+/).filter(Boolean)
    : [];

  // Function to highlight searched ingredients
  const highlightText = (text) => {
    if (!queryIngredients.length) return text;

    let highlighted = text;
    queryIngredients.forEach((q) => {
      const regex = new RegExp(`(${q})`, "gi");
      highlighted = highlighted.replace(
        regex,
        `<mark style="background: #ffeb3b; padding: 0 2px; border-radius: 3px;">$1</mark>`
      );
    });
    return highlighted;
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-img" />
      <h3>{recipe.name}</h3>

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{ __html: highlightText(ing) }}
          />
        ))}
      </ul>

      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>

      <h4>Nutrition Info:</h4>
      <ul className="nutrition-list">
        {Object.entries(recipe.nutrition).map(([key, value], i) => (
          <li key={i}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
