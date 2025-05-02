import { configureStore, createSlice } from "@reduxjs/toolkit";

// membuat slice nya
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// export actions
export const { addTodo, toggleTodo } = todosSlice.actions;

// buat store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
