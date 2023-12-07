import "./App.css";
import AddForm from "./components/AddForm";
import PeopleContainer from "./components/PeopleContainer";
import { useState } from "react";
import PutForm from "./components/PutForm";
import PatchForm from "./components/PatchForm";

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPeopleHandler = () => {
    setIsLoading(true);
    fetch(
      "https://predavanje-http-communication-default-rtdb.europe-west1.firebasedatabase.app/person.json",
    )
      .then((response) => response.json())
      .then((response) => {
        const peopleList = [];

        for (const key in response) {
          const person = {
            id: key,
            name: response[key].name,
            age: response[key].age,
            profession: response[key].profession,
          };
          peopleList.push(person);
        }
        setPeople(peopleList);
        setIsLoading(false);
      });
  };

  const deletePersonHandler = (id) => {
    setIsLoading(true);
    fetch(
      "https://predavanje-http-communication-default-rtdb.europe-west1.firebasedatabase.app/person/" +
        id +
        ".json",
      {
        method: "DELETE",
      },
    )
      .then((response) => response.json())
      .then((response) => {
        setPeople((prevPeople) => {
          return prevPeople.filter((person) => person.id !== id);
        });
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <div>
        <button onClick={fetchPeopleHandler}>Fetch people</button>
      </div>
      <div className="controls-container">
        <AddForm setPeople={setPeople} setIsLoading={setIsLoading} />
        <PutForm />
        <PatchForm />
      </div>
      {isLoading && <h3>Loading...</h3>}
      <PeopleContainer
        items={people}
        deletePersonHandler={deletePersonHandler}
      />
    </div>
  );
}

export default App;
