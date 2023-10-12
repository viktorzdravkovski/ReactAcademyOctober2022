import { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeNameHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const newPerson = {
      id: Math.random(),
      name: name,
      age: age,
    };

    props.addPersonHandler(newPerson);
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className={styles["form-container"]}>
        <label>Name</label>
        <input type="text" onChange={onChangeNameHandler} value={name} />
        <input type="text" onChange={onChangeAgeHandler} value={age} />
        <button type="submit">Add name</button>
      </div>
    </form>
  );
};

export default InputForm;
