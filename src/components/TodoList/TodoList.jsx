import React from "react";
import TodoItem from "../../containers/TodoItem";

const TodoList = (props) => {
  console.log(props);
  return (
    <ul className="App__todo-list">
      {props.todos.map((todo, i) => {
        return <TodoItem key={`${i}`} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
