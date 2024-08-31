import React from "react";

import Header from "./Container.jsx/Header";
import Button from "./Container.jsx/Button";
import ToDoItem from "./Container.jsx/ToDoItem";

import "./style.css";

const App = () => {
  return (<div className="todo-container" >
    <Header heading="TODO" />
    <ToDoItem text="Exercise" />
    <ToDoItem text="Read"/>
    <ToDoItem text="Code" />
    <ToDoItem text="Walk" />
    <ToDoItem text="Eat" />
    <Button />
  </div>)
}

export default App;