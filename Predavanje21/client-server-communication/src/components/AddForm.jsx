import './Form.css';
import {useState} from 'react';

const AddForm = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");

  const onChangeNameHandler = (event) => {
    setCurrentName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setCurrentAge(event.target.value);
  };

  const onChangeProfessionHandler = (event) => {
    setCurrentProfession(event.target.value);
  };

  const addPersonHandler = () => {
    props.setIsLoading(true);
    fetch("https://predavanje-http-communication-default-rtdb.europe-west1.firebasedatabase.app/person.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: currentName,
          age: currentAge,
          profession: currentProfession,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json())
      .then((response) => {
        const person = {
          id: response.name,
          name: currentName,
          age: currentAge,
          profession: currentProfession,
        };

        props.setPeople((prevState) => {
          return [...prevState, person];
        });

        props.setIsLoading(false);
      });
  };

  return <div className="add-form-container">
    <div className="add-form-item">
      <label>Name</label>
      <input type="text" value={currentName} onChange={onChangeNameHandler}/>
    </div>
    <div className="add-form-item">
      <label>Age</label>
      <input type="text" value={currentAge} onChange={onChangeAgeHandler}/>
    </div>
    <div className="add-form-item">
      <label>Profession</label>
      <input type="text" value={currentProfession} onChange={onChangeProfessionHandler}/>
    </div>
    <button onClick={addPersonHandler}>Add person</button>
  </div>
};

export default AddForm;