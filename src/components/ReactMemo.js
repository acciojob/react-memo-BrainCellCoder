import React, { useState, memo } from "react";

const ReactMemo = memo(({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Tasks must be more than 5 characters long."); // Always prefer more user-friendly error handling.
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Skill"
      />
      <button onClick={addSkill}>Add Skill</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
