import "./App.css";
import ScoreboardContainer from "./components/scoreboard/ScoreboardContainer";
import InputForm from "./components/input-form/InputForm";

const INITIAL_SCORES = [
  {
    id: 1,
    name: "Viktor",
    points: 3,
  },
  {
    id: 2,
    name: "Viktor",
    points: 10,
  },
  {
    id: 3,
    name: "Viktor",
    points: 7,
  },
  {
    id: 4,
    name: "Viktor",
    points: 1,
  },
];

function App() {
  return (
    <div className="app-container">
      <InputForm/>
      <ScoreboardContainer/>
    </div>
  );
}

export default App;
