import { useState } from "react";

const PutForm = () => {
  const [currentId, setCurrentId] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");

  const onChangeIdHandler = (event) => {
    setCurrentId(event.target.value);
  };

  const onChangeNameHandler = (event) => {
    setCurrentName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setCurrentAge(event.target.value);
  };

  const onChangeProfessionHandler = (event) => {
    setCurrentProfession(event.target.value);
  };

  const putPersonHandler = () => {
    fetch(
      `https://predavanje-http-communication-default-rtdb.europe-west1.firebasedatabase.app/person/${currentId}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: currentName,
          age: currentAge,
          profession: currentProfession,
        }),
      },
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  return (
    <div className="add-form-container">
      <div className="add-form-item">
        <label>Id</label>
        <input type="text" value={currentId} onChange={onChangeIdHandler} />
      </div>
      <div className="add-form-item">
        <label>Name</label>
        <input type="text" value={currentName} onChange={onChangeNameHandler} />
      </div>
      <div className="add-form-item">
        <label>Age</label>
        <input type="text" value={currentAge} onChange={onChangeAgeHandler} />
      </div>
      <div className="add-form-item">
        <label>Profession</label>
        <input
          type="text"
          value={currentProfession}
          onChange={onChangeProfessionHandler}
        />
      </div>
      <button onClick={putPersonHandler}>Put person</button>
    </div>
  );
};

export default PutForm;
