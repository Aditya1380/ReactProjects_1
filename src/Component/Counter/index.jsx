import React, { useState } from "react";
import "./styles.css";
const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <div className="counter-container">
        <h1>Counter</h1>
        <h3>{value}</h3>
        <div className="btn-counter-container">
          <button className="increment" onClick={() => setValue(value + 1)}>
            +
          </button>
          <button className="decrement" onClick={() => setValue(value - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
