import {useState} from 'react';

const CustomFormInlineStyle = () => {
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

    const formControlStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const inputFieldStyle = {
        borderColor: isValid ? 'black' : 'red',
        background: isValid ? 'transparent' : 'salmon'
    };

    const labelStyle = {color: isValid ? 'black' : 'red'};

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid black',
            borderRadius: '10px',
            width: '100%',
            height: '300px',
            alignItems: 'center'
        }}>
            <form onSubmit={onSubmitFormHandler}>
                <div style={formControlStyle}>
                    <label style={labelStyle}>Enter name</label>
                    <input type='text' value={name} onChange={onChangeNameHandler} style={inputFieldStyle}/>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default CustomFormInlineStyle;