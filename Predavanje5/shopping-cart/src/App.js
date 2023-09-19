import './App.css';
import RegisteredItemsContainer from './components/RegisteredItemsContainer';
import InputItemComponent from './components/InputItemComponent';
import {useState} from 'react';

function App() {
  const initialItems = [
    {
      id: 1,
      name: "Pickles",
      description: "Like cucumbers, but smaller.",
      price: 10,
    },
    {
      id: 2,
      name: "Apples",
      description: "They grow on trees.",
      price: 13,
    },
    {
      id: 3,
      name: "Chips",
      description: "Fun version of potatoes.",
      price: 15,
    },
    {
      id: 4,
      name: "Sunflower seeds",
      description: "Because you can't eat the flower.",
      price: 5,
    },
    {
      id: 5,
      name: "Pizza",
      description: "For every situation.",
      price: 20,
    },
  ];

  const [itemList, setItemList] = useState(initialItems);

  const addItemHandler = (submittedData) => {
    setItemList((currentState) => {
      const newId = currentState.length + 1;
      const newItem = {
        ...submittedData,
        id: newId
      };

      return [...currentState, newItem];
    });
  };

  return (
    <div className="app-container">
      <RegisteredItemsContainer items={itemList}/>
      <InputItemComponent onSubmitHandler={addItemHandler}/>
    </div>
  );
}

export default App;
