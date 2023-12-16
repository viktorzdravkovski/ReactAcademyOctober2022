import { useState } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const isEven = () => {
    if (value === 0) {
      return undefined;
    }
    return value % 2 === 0;
  };

  return {
    value,
    increment,
    decrement,
    isEven,
  };
};

export default useCounter;
