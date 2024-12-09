import React from "react";
import "./App.css";
import { Counter } from "./redux/counter/Counter";
import TodoComponent from "./redux/todolist/TodoComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Counter</p>
        <Counter />
        <p>TodoList</p>
        <TodoComponent />
      </header>
    </div>
  );
}

export default App;
