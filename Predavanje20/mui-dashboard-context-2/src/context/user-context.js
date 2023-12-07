import { createContext, useEffect, useState } from "react";
import loginUser, { dummyUser } from "../util/login-user";

const UserContext = createContext({
  isLoggedIn: false,
  isLoading: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  user: {
    name: "",
    email: "",
    role: "",
    routes: [],
  },
  managedUsers: [{}],
  deleteUser: () => {},
  currentRoute: "",
  switchRoute: () => {},
});

export const UserContextProvider = (props) => {
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("Services");
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    role: "",
    routes: [],
  });
  const [managedUsers, setManagedUsers] = useState([
    {
      name: "John",
      email: "john@test.com",
      role: "Member",
    },
    {
      name: "Kathy",
      email: "kathy@test.com",
      role: "Member",
    },
    {
      name: "Paul",
      email: "paul@test.com",
      role: "Member",
    },
    {
      name: "Alicia",
      email: "alicia@test.com",
      role: "Member",
    },
    {
      name: "Danny",
      email: "danny@test.com",
      role: "Member",
    },
    {
      name: "Gwen",
      email: "gwen@test.com",
      role: "Member",
    },
  ]);

  const deleteUser = (email) => {
    console.log(email);
    setManagedUsers((prevState) => {
      const newUsers = prevState.filter((user) => {
        return user.email !== email;
      });
      return newUsers;
    });
  };

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");
    if (userLoginInfo === "1") {
      setIsLoggedInState(true);
      setLoggedInUser(dummyUser);
    }
  }, []);

  const loginHandler = () => {
    setIsLoadingState(true);

    loginUser().then((response) => {
      localStorage.setItem("isLoggedIn", "1");
      setLoggedInUser(response);
      setIsLoggedInState(true);
      setIsLoadingState(false);
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedInState(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedInState,
        isLoading: isLoadingState,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        user: loggedInUser,
        managedUsers: managedUsers,
        deleteUser: deleteUser,
        currentRoute: currentRoute,
        switchRoute: setCurrentRoute,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
