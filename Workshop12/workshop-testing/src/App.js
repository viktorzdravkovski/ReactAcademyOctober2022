import "./App.css";
import InputComponent from "./components/InputComponent";
import ButtonComponent from "./components/ButtonComponent";
import Async from "./components/Async";

function App() {
  return (
    <div className="app">
      <InputComponent />
      <ButtonComponent />
      <Async />
    </div>
  );
}

export default App;
