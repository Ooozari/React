// src/features/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: 'My First Todo',
      isCompleted: false,
      // isUpdateable: false, no need for it
    },
  ],
  statusMessage: null,
  filterType: 'All'
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        isCompleted: false,
        isUpdateable: false,
      };
      state.todos.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    
    toggleCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },

    // Setting FilterType 
    setFilterType: (state, action) => {
      state.filterType = action.payload
    },

    // status message 
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload
    }
  },
});

// exporting Indiviual reducers 
export const { addTodo, deleteTodo, updateTodo, toggleCompleted, setFilterType, setStatusMessage } = todoSlice.actions;

export default todoSlice.reducer;
