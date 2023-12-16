import {useState} from 'react';

const Greeting = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const onClickHandler = () => {
    setButtonClicked(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!buttonClicked && <p>It's nice to meet you.</p>}
      {buttonClicked && <p>Clicked!</p>}
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
};

export default Greeting;