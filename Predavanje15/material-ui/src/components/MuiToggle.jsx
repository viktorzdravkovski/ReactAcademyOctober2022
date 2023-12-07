import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

const MuiToggle = () => {
  const [toggleState, setToggleState] = useState([]);
  const [toggleStateExclusive, setToggleStateExclusive] = useState(null);

  const onChangeToggleHandler = (event, updatedToggle) => {
    console.log(updatedToggle);
    setToggleState(updatedToggle);
  };

  const onChangeToggleExclusiveHandler = (event, updatedToggle) => {
    console.log(updatedToggle);
    setToggleStateExclusive(updatedToggle);
  };

  return (
    <>
      <div>
        <ToggleButtonGroup value={toggleState} onChange={onChangeToggleHandler}>
          <ToggleButton value="red">Red</ToggleButton>
          <ToggleButton value="blue">Blue</ToggleButton>
          <ToggleButton value="green">Green</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div style={{ marginTop: "50px" }}>
        <ToggleButtonGroup
          value={toggleStateExclusive}
          onChange={onChangeToggleExclusiveHandler}
          exclusive
        >
          <ToggleButton value="red">Red</ToggleButton>
          <ToggleButton value="blue">Blue</ToggleButton>
          <ToggleButton value="green">Green</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default MuiToggle;
