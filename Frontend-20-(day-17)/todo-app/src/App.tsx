import { useState } from "react";
import "./App.css";

type Todo = {
  id: number;
  task: string;
};

function App() {
  const [task, setTask] = useState<string>(""); // nilai awalnya dari catatan yang ingin kita tambahkan
  const [todos, setTodos] = useState<Todo[]>([]); // kumpulan data catatan

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      task: task.trim(),
    };

    // ...todos => data existing
    // newTodo => data baru
    // ...todos + newTodo => merging

    setTodos([...todos, newTodo]);
    setTask("");
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Tulis tugas.."
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />

      <button onClick={handleAddTask}>Tambah</button>
      <ul style={{ marginTop: "1rem", textAlign: "left" }}>
        {todos.map((todo) => (
          <li key={todo.id}>✅ {todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
