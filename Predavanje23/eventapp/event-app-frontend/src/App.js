import "./App.css";
import EventsPage from "./components/EventsPage";
import EventCreate from "./components/EventCreate";
import { styled, createTheme, ThemeProvider, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
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

const theme = createTheme({
  palette: {
    background: {
      default: blueGrey[100],
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
});

function App() {
  const [eventCreationMode, setEventCreationMode] = useState(false);
  const [eventId, setEventId] = useState("");

  const toggleEventCreationMode = () => {
    setEventCreationMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Button
          variant="contained"
          color="warning"
          sx={{ margin: "3% 0" }}
          onClick={toggleEventCreationMode}
        >
          {eventCreationMode ? "Cancel" : "Create Event"}
        </Button>
        {!eventId && !eventCreationMode && (
          <EventsPage setEventId={setEventId} />
        )}
        {eventId && !eventCreationMode && (
          <EventDetail eventId={eventId} setEventId={setEventId} />
        )}
        {eventCreationMode && <EventCreate />}
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
