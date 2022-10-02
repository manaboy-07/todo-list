/** @format */

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
//Note:  when callling state outside the function you will need to call state.{name of state}
//Otherwise state alone is enough
// also google findIndex
export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;
export const SelectAllTodos = (state) => state.todos;
export default todoSlice.reducer;
