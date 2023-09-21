import './InputItemComponent.css';
import { useState } from 'react';

const InputItemComponent = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');

  const { onSubmitHandler } = props;

  const onChangeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const onChangePriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const newItem = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
    };

    onSubmitHandler(newItem);
  };

  return (
    <div className='input-form-container'>
      <form className='input-form' onSubmit={onSubmitFormHandler}>
        <div>
          <h3>Name of Item</h3>
          <input
            type='text'
            value={enteredName}
            onChange={onChangeNameHandler}
          />
        </div>
        <div>
          <h3>Description of Item</h3>
          <input
            type='text'
            value={enteredDescription}
            onChange={onChangeDescriptionHandler}
          />
        </div>
        <div>
          <h3>Price of Item</h3>
          <input
            type='number'
            value={enteredPrice}
            onChange={onChangePriceHandler}
          />
        </div>
        <button type='submit' className='btn-submit'>
          Add item
        </button>
      </form>
    </div>
  );
};

export default InputItemComponent;
