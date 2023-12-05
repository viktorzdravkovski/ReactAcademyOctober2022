import EventsPage from "./components/EventsPage";
import { Button, createTheme, styled, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import EventCreate from "./components/EventCreate";
import { useState } from "react";
import EventDetail from "./components/EventDetail";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 3,
  backgroundColor: theme.palette.warning.main,
  "&:hover": {
    backgroundColor: theme.palette.warning.light,
  },
}));

const theme = createTheme({
  palette: {
    background: {
      default: blueGrey[50],
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
});

function App() {
  const [eventId, setEventId] = useState("");
  const [eventCreationMode, setEventCreationMode] = useState(false);

  const toggleEventCreationMode = () => {
    setEventCreationMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledButton variant="contained" onClick={toggleEventCreationMode}>
          {eventCreationMode ? "Cancel" : "Create an event"}
        </StyledButton>
        {!eventId && !eventCreationMode && (
          <EventsPage setEventId={setEventId} />
        )}
        {eventId && !eventCreationMode && (
          <EventDetail setEventId={setEventId} eventId={eventId} />
        )}
        {eventCreationMode && <EventCreate />}
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
