import React, { useState } from "react";
import "./Header.css";
import { v4 as uuidv4 } from "uuid";

const Header = (props) => {
  const [title, setTitle] = useState("");

  //handle Title Input Value Change
  const handleChange = (event) => setTitle(event.target.value);

  //Handle Add Todo Button CLick
  const handleClick = () => {
    if (title) {
      props.actions.addTodo({ id: uuidv4(), title: title, completed: false });
    } else {
      alert("Please enter the todo title");
    }
  };

  return (
    <header className="App__header">
      <h1 className="App__title">Todo App</h1>

      <div className="App__input-container">
        <input
          type="text"
          className="App__input"
          placeholder="Title..."
          onChange={handleChange}
        />
        <button className="App__add-btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
