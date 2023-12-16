import React from "react";
import useCounter from "../hooks/useCounter";

// Add tests
const ButtonComponent = () => {
  const { value, increment, decrement, isEven } = useCounter();

  return (
    <div className="btn">
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div className="paragraphs">
        <p>{value}</p>
        {isEven() && <p>Even</p>}
        {!isEven() && isEven() !== undefined && <p>Odd</p>}
        {isEven() && value === 10 && <p>TEN</p>}
        {!isEven() && value < 0 && <p>Negative odd</p>}
      </div>
    </div>
  );
};

export default ButtonComponent;
