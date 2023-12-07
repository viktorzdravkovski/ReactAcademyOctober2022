import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import MainContent from "./components/MainContent";
import { useContext, useState } from "react";
import { blueGrey, teal } from "@mui/material/colors";
import Login from "./components/Login";
import UserContext from "./context/user-context";

function App() {
  const userContext = useContext(UserContext);
  const [mode, setMode] = useState("light");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const userLoginInfo = localStorage.getItem("isLoggedIn");
  //   if (userLoginInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = () => {
  //   setIsLoading(true);
  //
  //   loginUser().then((response) => {
  //     localStorage.setItem("isLoggedIn", "1");
  //     setIsLoggedIn(true);
  //     setIsLoading(false);
  //   });
  // };
  //
  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: teal[500],
            },
          }
        : {
            primary: {
              main: blueGrey[500],
            },
          }),
    },
    typography: {
      fontFamily: "Chakra Petch",
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightRegular: 500,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" bgcolor="background.default" p={0}>
        {!userContext.isLoggedIn && <Login />}
        {userContext.isLoggedIn && <MainContent setMode={setMode} />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
