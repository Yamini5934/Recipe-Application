import React from "react";
import "./NutritionInfo.css";

function NutritionInfo({ calories, protein, fat, carbs }) {
  return (
    <div className="nutrition card">
      <h3>Nutrition Info</h3>
      <p>🔥 Calories: {calories}</p>
      <p>💪 Protein: {protein}g</p>
      <p>🥑 Fat: {fat}g</p>
      <p>🌾 Carbs: {carbs}g</p>
    </div>
  );
}

export default NutritionInfo;
