/** @format */

import React from "react";
import { useSelector } from "react-redux";
function TotalTodo() {
  const completedTodo = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const TotalItems = useSelector((state) => state.todos.length);
  return (
    <div>
      <h3>Total Todo Items : {TotalItems} </h3>
      <h3>Total Completed Items: {completedTodo.length}</h3>
    </div>
  );
}

export default TotalTodo;
