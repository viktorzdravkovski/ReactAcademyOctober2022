import "./App.css";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { teal, blueGrey } from "@mui/material/colors";

function App() {
  const [mode, setMode] = useState("light");

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
        <MainContent setMode={setMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
