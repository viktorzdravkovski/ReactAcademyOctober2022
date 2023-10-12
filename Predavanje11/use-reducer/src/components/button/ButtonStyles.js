import styled from "styled-components";

export const StyledButton = styled.button`
  width: 20%;
  border: none;
  padding: 5px 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "purple")};
  color: white;
  cursor: pointer;
`;
