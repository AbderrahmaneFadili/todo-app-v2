import React, { useState } from "react";
import "./TodoItem.css";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

const TodoItem = (props) => {
  //state for handling toggle ui of completed
  const [toogleComplete, setToggleComplete] = useState(null);

  const {
    todo: { id, title, completed },
  } = props;

  //handle trash icon click
  const handleTrachClick = () => {
    props.actions.deleteTodo(id);
  };

  //handle complelted
  const handleCompleted = () => {
    props.actions.toggleCompleted(id);
    setToggleComplete(!completed);
  };

  return (
    <li className="App__todo-item">
      {/* Icon Left : check */}
      <FaCheck
        onClick={handleCompleted}
        className="App__todo-item__check"
        style={{
          visibility: toogleComplete ? "visible" : "hidden",
        }}
      />

      {/* Title */}
      <span
        onClick={handleCompleted}
        className="App__todo-item__title"
        style={{
          textDecoration: toogleComplete ? "line-through" : "none",
        }}
      >
        {title}
      </span>

      {/* Icon Right : check */}
      <FaRegTrashAlt
        className="App__todo-item__remove"
        onClick={handleTrachClick}
      />
    </li>
  );
};

export default TodoItem;
