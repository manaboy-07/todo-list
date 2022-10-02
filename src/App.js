/** @format */

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TotalTodo from "./components/TotalTodo";

function App() {
  return (
    <div className='App'>
      <h1 className='todo-header'>TodoList</h1>
      {/* todo form */}
      <TodoForm />
      <h4>List items displayed here : </h4>
      {/* todo list */}
      <TodoList />
      {/* total items */}
      <TotalTodo />
    </div>
  );
}

export default App;
