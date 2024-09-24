import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const expensiveCalculation = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h2>My todos</h2>
      <p>Count: {count}</p>
      <button onClick={increment} id="incr-cnt">
        +
      </button>
      <p>Expensive Calculation: {expensiveCalculation}</p>
    </div>
  );
};

export default UseMemo;
