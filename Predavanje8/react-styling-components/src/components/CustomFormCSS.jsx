import './CustomFormCSS.css';
import {useState} from 'react';

const CustomFormCSS = () => {
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

    const classes = isValid ? 'form-control' : 'form-control invalid'

    return (
        <div className='form-container'>
            <form onSubmit={onSubmitFormHandler}>
                {/*<div className={`form-control ${isValid ? '' : 'invalid'}`}>*/}
                <div className={classes} style={{border: '5px dashed black'}}>
                    <label>Enter name</label>
                    <input type='text' value={name} onChange={onChangeNameHandler}/>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default CustomFormCSS;