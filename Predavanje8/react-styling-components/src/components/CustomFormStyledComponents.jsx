import {useState} from 'react';
import styled from 'styled-components';

const FormContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    width: 100%;
    height: 300px;
    align-items: center;
`;

// const FormControlDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: 2px solid red;
//
//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }
//
//   &.invalid label {
//     color: red;
//   }
// `;

const FormControlDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  & input {
    border-color: ${props => (props.valid ? '#ccc' : 'red')};
    background: ${props => (props.valid ? 'transparent' : '#ffd7d7')};
  }

  & label {
    color: ${props => props.valid ? 'black' : 'red'};
  }
`;

const CustomFormStyledComponents = () => {
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState('');

    const onChangeNameHandler = (event) => {
        setName(event.target.value);
        event.target.value.trim().length === 0 ? setIsValid(false) : setIsValid(true);
    };

    const onSubmitFormHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        setName('');
    };

    return (
        <FormContainerDiv>
            <form onSubmit={onSubmitFormHandler}>
                {/*<FormControlDiv className={!isValid && 'invalid'}>*/}
                <FormControlDiv valid={isValid}>
                    <label>Enter name</label>
                    <input type='text' value={name} onChange={onChangeNameHandler}/>
                </FormControlDiv>
                <button type='submit'>Add</button>
            </form>
        </FormContainerDiv>
    );
};

export default CustomFormStyledComponents;