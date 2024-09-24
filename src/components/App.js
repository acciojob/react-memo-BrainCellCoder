import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <button onClick={addTodo} id="add-todo-btn">
        Add Todo
      </button>
      <UseMemo />
      <ReactMemo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
