/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted, deleteTodo } from "../features/todoSlice";
import { FaTrashAlt } from "react-icons/fa";
function TodoItems({ id, title, completed, length }) {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(
      toggleCompleted({
        id: id,
        completed: !completed,
      })
    );
  };
  
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };
  return (
    <li>
      <div className='list-container'>
        <input
          type='checkbox'
          id='xd'
          checked={completed}
          onChange={handleCompleted}
        />
        <h2 className={`title ${completed ? "line-through" : null}`}>
          {title}
        </h2>
        <div>
          <button className='del-btn' onClick={handleDelete}>
            <FaTrashAlt className='trash' />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItems;
