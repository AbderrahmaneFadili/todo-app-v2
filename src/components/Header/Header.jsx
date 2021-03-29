import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="App__header">
      <h1 className="App__title">Todo App</h1>

      <div className="App__input-container">
        <input type="text" className="App__input" placeholder="Title..." />
        <button className="App__add-btn">Add</button>
      </div>
    </header>
  );
};

export default Header;
