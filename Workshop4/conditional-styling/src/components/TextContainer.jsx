import styled from "styled-components";
import { useState } from "react";

const StyledDivContainer = styled.div`
  border: 1px solid wheat;
  border-radius: 10px;
  background: wheat;
  height: 30%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledMatcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;

  & h3 {
    height: 20%;
    width: 100%;
    text-align: center;
    color: ${(props) => (props.valid ? "#13c506" : "black")};
    border: ${(props) => (props.valid ? "1px solid #13c506" : "none")};
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
`;

const TextContainer = () => {
  const [text, setText] = useState("");
  const [matcher, setMatcher] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  const onChangeMatcherHandler = (event) => {
    setMatcher(event.target.value);
    event.target.value.trim().length > 0 &&
    text.indexOf(event.target.value) > -1
      ? setIsMatch(true)
      : setIsMatch(false);
  };

  const onChangeTextHandler = (event) => {
    setText(event.target.value);
    event.target.value.trim().length > 0 &&
    event.target.value.indexOf(matcher) > -1
      ? setIsMatch(true)
      : setIsMatch(false);
  };

  return (
    <StyledDivContainer>
      <StyledMatcherContainer valid={isMatch}>
        <h3>{matcher}</h3>
        <label>Change text to match</label>
        <input type="text" onChange={onChangeMatcherHandler} value={matcher} />
      </StyledMatcherContainer>
      <StyledTextContainer>
        <label>Add text</label>
        <input type="text" onChange={onChangeTextHandler} value={text} />
      </StyledTextContainer>
    </StyledDivContainer>
  );
};

export default TextContainer;
