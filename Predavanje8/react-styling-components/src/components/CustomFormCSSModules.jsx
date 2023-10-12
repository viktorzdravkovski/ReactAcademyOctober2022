import styles from './CustomFormCSSModules.module.css';
import {useState} from 'react';

const CustomFormCSSModules = () => {
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

    const classes = `${styles['form-control']} ${!isValid && styles.invalid}`;

    return (
        <div className={styles['form-container']}>
            <form onSubmit={onSubmitFormHandler}>
            {/*<div className={`form-control ${isValid ? '' : 'invalid'}`}>*/}
            <div className={classes}>
                <label>Enter name</label>
                <input type='text' value={name} onChange={onChangeNameHandler}/>
            </div>
            <button type='submit' className={styles.button}>Add</button>
            </form>
        </div>
    );
};

export default CustomFormCSSModules;