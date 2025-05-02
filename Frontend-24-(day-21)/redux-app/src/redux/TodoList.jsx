import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // redux
import { toggleTodo } from "./store";

function TodoList() {
  const todos = useSelector((state) => state.todos); // redux (finding data)
  const dispatch = useDispatch(); // redux (untuk ngirim data ke reducer)

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList
