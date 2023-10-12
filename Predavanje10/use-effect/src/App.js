import "./App.css";
import Header from "./components/header/Header";
import LoginForm from "./components/login-form/LoginForm";
import UserContainer from "./components/user-container/UserContainer";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");
    if (userLoginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginUser = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
      {!isLoggedIn && <LoginForm onSubmitForm={loginUser} />}
      {isLoggedIn && <UserContainer />}
    </div>
  );
}

export default App;
