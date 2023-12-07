import "./App.css";
import { useReducer } from "react";
import Header from "./components/header/Header";
import PeopleContainer from "./components/people-container/PeopleContainer";

const people = [
  {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eyeColor: "blue",
    birthYear: "19BBY",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    id: 2,
    name: "C-3PO",
    height: "167",
    mass: "75",
    eyeColor: "yellow",
    birthYear: "112BBY",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
];

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        isLoading: false,
        people: action.value,
      };
    case "START_LOADING":
      return {
        isLoading: true,
        people: state.people,
      };
    default:
      return {
        isLoading: false,
        people,
      };
  }
};

function App() {
  const [appState, dispatchApp] = useReducer(appReducer, {
    isLoading: false,
    people: [],
  });

  const loadPeopleHandler = () => {
    dispatchApp({ type: "START_LOADING" });
    console.log("Loading people...");
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        const peopleList = data.results.map((person) => {
          const splitUrl = person.url.split("/");
          const personId = splitUrl[splitUrl.length - 2];

          return {
            name: person.name,
            height: person.height,
            mass: person.mass,
            eyeColor: person["eye_color"],
            birthYear: person["birth_year"],
            homeworld: person.homeworld,
            id: personId,
          };
        });

        dispatchApp({ type: "SET_PEOPLE", value: peopleList });
      });
  };

  const spinner = <div className={"loader"}></div>;

  return (
    <div className="App">
      <Header loadPeople={loadPeopleHandler} />
      {appState.isLoading && spinner}
      {!appState.isLoading && appState.people.length === 0 && (
        <p>People list needs to be loaded</p>
      )}
      {!appState.isLoading && appState.people.length !== 0 && (
        <PeopleContainer people={appState.people} />
      )}
    </div>
  );
}

export default App;
