import React from "react";
import TodoItem from "../../containers/TodoItem";

const TodoList = (props) => {
  return (
    <ul className="App__todo-list">
      {props.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
