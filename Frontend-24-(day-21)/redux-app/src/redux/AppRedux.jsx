import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function AppRedux() {
  return (
    <div className="app">
      <h2>Todo App (Redux)</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default AppRedux;
