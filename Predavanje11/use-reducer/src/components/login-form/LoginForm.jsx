import { StyledLoginForm } from "./FormStyles";
import { StyledButton } from "../button/ButtonStyles";
import styles from "./LoginForm.module.css";
import { useState, useEffect, useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  return {
    value: "",
    isValid: true,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 7,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 7,
    };
  }

  return {
    value: "",
    isValid: true,
  };
};

const LoginForm = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [isEmailValid, setIsEmailValid] = useState(true);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: true,
  });
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log("UseEffect call");
    const timeoutId = setTimeout(() => {
      console.log("debouncing");
      setIsFormValid(emailState.isValid && passwordState.isValid);
    }, 1000);

    return () => {
      console.log("cleaning up!");
      clearTimeout(timeoutId);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const onChangeEmailHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const emailValidationHandler = () => {
    // setIsEmailValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const onChangePasswordHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordValidationHandler = () => {
    // setIsPasswordValid(enteredPassword.trim().length > 7);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      email: emailState.value,
      password: passwordState.value,
    };

    props.onSubmitForm(newUser);
  };

  return (
    <StyledLoginForm onSubmit={onSubmitHandler}>
      <div
        className={`${styles["styled-container"]} ${
          emailState.isValid ? "" : styles.invalid
        }`}
      >
        <label>Email</label>
        <input
          type="text"
          value={emailState.value}
          onChange={onChangeEmailHandler}
          onBlur={emailValidationHandler}
        />
      </div>
      <div
        className={`${styles["styled-container"]} ${
          passwordState.isValid ? "" : styles.invalid
        }`}
      >
        <label>Password</label>
        <input
          type="password"
          value={passwordState.value}
          onChange={onChangePasswordHandler}
          onBlur={passwordValidationHandler}
        />
      </div>
      <StyledButton type="submit" disabled={!isFormValid}>
        Add user
      </StyledButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
