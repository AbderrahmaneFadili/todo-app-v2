import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
const todos = [
  { id: uuidv4(), title: "eate..", completed: true },
  { id: uuidv4(), title: "coding..", completed: true },
  { id: uuidv4(), title: "training..", completed: false },
];

const TodoList = () => {
  console.log(todos);
  return (
    <ul className="App__todo-list">
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={`${i}`}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
