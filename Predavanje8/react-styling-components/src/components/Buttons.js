import './Button.css';
import styled from 'styled-components';

export const Button1 = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #810c81;
    color: white;
    background: #810c81;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #d912d9;
    border-color: #d912d9;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button2 = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #0c177f;
  color: white;
  background: #0c177f;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #1728dd;
    border-color: #1728dd;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Buttons = () => {
//     return <button type='submit' className='button'>Click</button>
// };

