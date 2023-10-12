import "./App.css";
import LoginForm from "./components/login-form/LoginForm";
import { useState } from "react";
import UserContainer from "./components/user-container/UserContainer";

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (user) => {
    setUserList((currentUsers) => [...currentUsers, user]);
  };

  return (
    <div className="App">
      <LoginForm onSubmitForm={addUser} />
      {userList.length !== 0 && <UserContainer users={userList} />}
    </div>
  );
}

export default App;
