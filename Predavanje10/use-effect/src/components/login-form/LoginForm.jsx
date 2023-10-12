import { StyledForm } from "./FormStyles";
import { StyledButton } from "../button/ButtonStyles";
import styles from "./LoginForm.module.css";
import { useState, useEffect } from "react";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log("UseEffect call");
    const timeoutId = setTimeout(() => {
      console.log("debouncing");
      setIsFormValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 7,
      );
    }, 1000);

    return () => {
      console.log("cleaning up!");
      clearTimeout(timeoutId);
    };
  }, [enteredEmail, enteredPassword]);

  const onChangeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailValidationHandler = () => {
    setIsEmailValid(enteredEmail.includes("@"));
  };

  const onChangePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordValidationHandler = () => {
    setIsPasswordValid(enteredPassword.trim().length > 7);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm();
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <div
        className={`${styles["styled-container"]} ${
          isEmailValid ? "" : styles.invalid
        }`}
      >
        <label>Email</label>
        <input
          type="text"
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={emailValidationHandler}
        />
      </div>
      <div
        className={`${styles["styled-container"]} ${
          isPasswordValid ? "" : styles.invalid
        }`}
      >
        <label>Password</label>
        <input
          type="password"
          value={enteredPassword}
          onChange={onChangePasswordHandler}
          onBlur={passwordValidationHandler}
        />
      </div>
      <StyledButton type="submit" disabled={!isFormValid}>
        Log In
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
