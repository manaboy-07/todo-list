/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("You cant add an empty todo");
      return;
    }

    dispatch(
      addTodo({
        title: value,
      })
    );

    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='Add todo ?'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button className='add-btn'>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
