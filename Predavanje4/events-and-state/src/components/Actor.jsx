import { useState } from 'react';
import './Actor.css';

const Actor = (props) => {
  const { name, age, isMarried } = props;
  const [nameState, setNameState] = useState(name);
  const [isMarriedState, setIsMarriedState] = useState(isMarried);
  const [colorState, setColorState] = useState('white-bg');
  // const isMarriedState = useState(isMarried)[0];
  // const setIsMarriedState = useState(isMarried)[1];
  const marriedText = isMarriedState === true ? 'Married' : 'Not Married';
  //   let temporaryName = name;
  //   console.log(temporaryName);

  const classes = 'card-container ' + colorState;

  const changeNameHandler = () => {
    setNameState('Updated Name!');
    console.log(nameState);
  };

  const changeMaritalStatusHandler = () => {
    // if (isMarriedState) {
    //   setIsMarriedState(false);
    // } else {
    //   setIsMarriedState(true);
    // }
    setIsMarriedState(!isMarriedState);
  };

  const changeBackgroundColorHandler = () => {
    const newColorClass = colorState === 'white-bg' ? 'blue-bg' : 'white-bg';
    setColorState(newColorClass);
  };

  return (
    <div className={classes}>
      <h2>{nameState}</h2>
      <p>{age}</p>
      <p>{marriedText}</p>
      <button onClick={changeNameHandler}>Change Name</button>
      <button onClick={changeMaritalStatusHandler}>
        Change marital status
      </button>
      <button onClick={changeBackgroundColorHandler}>
        Change background color
      </button>
    </div>
  );
};

export default Actor;
