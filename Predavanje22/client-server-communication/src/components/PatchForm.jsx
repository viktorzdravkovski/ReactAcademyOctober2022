import { useState } from "react";

const PatchForm = () => {
  const [currentId, setCurrentId] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");

  const onChangeIdHandler = (event) => {
    setCurrentId(event.target.value);
  };

  const onChangeProfessionHandler = (event) => {
    setCurrentProfession(event.target.value);
  };

  const patchPersonHandler = () => {
    fetch(
      `https://predavanje-http-communication-default-rtdb.europe-west1.firebasedatabase.app/person/${currentId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        <label>Profession</label>
        <input
          type="text"
          value={currentProfession}
          onChange={onChangeProfessionHandler}
        />
      </div>
      <button onClick={patchPersonHandler}>Patch person</button>
    </div>
  );
};

export default PatchForm;
