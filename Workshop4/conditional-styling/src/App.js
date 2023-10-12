import TextContainer from "./components/TextContainer";
import styled from "styled-components";
import TextContainerModules from "./components/TextContainerModules";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  background: #650d7a;
`;

function App() {
  return (
    <AppContainer>
      <TextContainer />
      <TextContainerModules />
    </AppContainer>
  );
}

export default App;
