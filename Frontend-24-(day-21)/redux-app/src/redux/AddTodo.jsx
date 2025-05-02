import React, { useState } from "react";
import { useDispatch } from "react-redux"; // redux
import { addTodo } from "./store";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch(); // redux

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text)); // redux
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
