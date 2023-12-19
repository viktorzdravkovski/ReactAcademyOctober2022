import "./App.css";
import EventsPage from "./components/EventsPage";
import EventCreate from "./components/EventCreate";
import { styled, createTheme, ThemeProvider, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import EventDetail from "./components/EventDetail";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const theme = createTheme({
  palette: {
    background: {
      default: blueGrey[100],
    },
    primary: {
      main: blueGrey[500],
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
});

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/events" element={<EventsPage />} />
//   </Route>,
// );
//
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
    ],
  },
]);

function App() {
  const [eventCreationMode, setEventCreationMode] = useState(false);
  const [eventId, setEventId] = useState("");

  const toggleEventCreationMode = () => {
    setEventCreationMode((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <RouterProvider router={router}>
          {/*<Button*/}
          {/*  variant="contained"*/}
          {/*  color="warning"*/}
          {/*  sx={{ margin: "3% 0" }}*/}
          {/*  onClick={toggleEventCreationMode}*/}
          {/*>*/}
          {/*  {eventCreationMode ? "Cancel" : "Create Event"}*/}
          {/*</Button>*/}
          {/*{!eventId && !eventCreationMode && (*/}
          {/*  <EventsPage setEventId={setEventId} />*/}
          {/*)}*/}
          {/*{eventId && !eventCreationMode && (*/}
          {/*  <EventDetail eventId={eventId} setEventId={setEventId} />*/}
          {/*)}*/}
          {/*{eventCreationMode && <EventCreate />}*/}
        </RouterProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
