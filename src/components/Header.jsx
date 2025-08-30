import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>🍴 My Recipe Book</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Favorites</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;
