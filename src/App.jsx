import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
class App extends Component {
  render() {
    return (
      <div className="Todo-App__container">
        <Header />
        <TodoList />
      </div>
    );
  }
}
export default App;
