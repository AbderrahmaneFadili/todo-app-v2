import React, { Component } from "react";
import "./App.css";
import Header from "./containers/Header";
import TodoList from "./containers/TodoList";

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
