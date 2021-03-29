import React from "react";
import "./TodoItem.css";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

const TodoItem = (props) => {
  const {
    todo: { id, title, completed },
  } = props;

  const handleTrachClick = () => {
    console.log(id);
    props.actions.deleteTodo(id);
  };

  return (
    <li className="App__todo-item">
      {/* Icon Left : check */}
      <FaCheck
        className="App__todo-item__check"
        style={{
          visibility: completed ? "visible" : "hidden",
        }}
      />

      {/* Title */}
      <span
        className="App__todo-item__title"
        style={{
          textDecoration: completed ? "line-through" : "none",
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
