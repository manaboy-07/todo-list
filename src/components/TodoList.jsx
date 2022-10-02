/** @format */

import React from "react";
import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";
import { SelectAllTodos } from "../features/todoSlice";
function TodoList() {
  const todos = useSelector(SelectAllTodos);
  const TotalItems = useSelector((state) => state.todos.length);
  return (
    <div>
      {TotalItems ? (
        <ul className='list-group'>
          {todos.map((todo) => {
            return (
              <TodoItems
                key={todo.id}
                id={todo.id}
                title={todo.title}
                length={todo.length}
                completed={todo.completed}
              />
            );
          })}
        </ul>
      ) : (
        <h3 className='text-center'>List is empty</h3>
      )}
    </div>
  );
}

export default TodoList;
