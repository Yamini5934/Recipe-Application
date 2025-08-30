import React from "react";
import "./ServingSizeSelector.css";

function ServingSizeSelector() {
  return (
    <div className="serving-size">
      <label>🍽 Serving Size: </label>
      <select>
        <option>1 person</option>
        <option>2 people</option>
        <option>4 people</option>
        <option>6 people</option>
      </select>
    </div>
  );
}

export default ServingSizeSelector;
