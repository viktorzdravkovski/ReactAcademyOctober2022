import ActorContainer from './components/ActorContainer';

function App() {
  const actors = [
    {
      id: 1,
      name: "Tom Cruise",
      age: 60,
      isMarried: true
    },
    {
      id: 2,
      name: "Brad Pitt",
      age: 58,
      isMarried: false
    },
    {
      id: 3,
      name: "Olivia Wilde",
      age: 38,
      isMarried: true
    },
    {
      id: 4,
      name: "Angelina Jolie",
      age: 47,
      isMarried: false
    },
  ];
  
  return (
      <ActorContainer actorList={actors}/>
  );
}

export default App;
