import PersonCard from "./components/PersonCard";
import InputForm from "./components/InputForm";
import NameContainer from "./components/NameContainer";
import { useState } from "react";

function App() {
  const DUMMY_PERSONS = [
    {
      id: 1,
      name: "Viktor",
      age: 28,
    },
    {
      id: 2,
      name: "Angela",
      age: 20,
    },
    {
      id: 3,
      name: "Marija",
      age: 30,
    },
  ];

  // const [people, setPeople] = useState(DUMMY_PERSONS);
  const [people, setPeople] = useState([]);
  const [peopleToDelete, setPeopleToDelete] = useState([]);

  const addPerson = (person) => {
    setPeople((currentPeople) => {
      return [...currentPeople, person];
    });

    setPeopleToDelete((currentPeople) => {
      return [...currentPeople, person];
    });
  };

  const deletePeople = () => {
    setPeopleToDelete([]);
  };

  return (
    <div>
      <InputForm addPersonHandler={addPerson} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <NameContainer>
          {people.map((person) => {
            return <PersonCard person={person} key={person.id} />;
          })}
        </NameContainer>
        <NameContainer deletePeopleHandler={deletePeople}>
          {peopleToDelete.map((person) => {
            return <PersonCard person={person} key={person.id} />;
          })}
        </NameContainer>
      </div>
    </div>
  );
}

export default App;
