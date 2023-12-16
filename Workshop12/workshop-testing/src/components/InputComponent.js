import React, { useState } from "react";

// Add tests
const InputComponent = () => {
  const [textValue, setTextValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChangeTextHandler = (event) => {
    setTextValue(event.target.value);
    if (
      (event.target.value.length > 7 && event.target.value.length < 11) ||
      event.target.value.includes(".")
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="text">
      <input type="text" value={textValue} onChange={onChangeTextHandler} />
      {isValid && <p>Conditional text here.</p>}
    </div>
  );
};

export default InputComponent;
