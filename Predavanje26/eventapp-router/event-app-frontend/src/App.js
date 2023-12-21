import "./App.css";
import EventsPage, { loader as eventsLoader } from "./components/EventsPage";
import { createTheme, styled, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import EventDetail, {
  loader as eventDetailLoader,
} from "./components/EventDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import EventCreate, {
  action as eventCreateAction,
} from "./components/EventCreate";
import EventEdit from "./components/EventEdit";

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const theme = createTheme({
  palette: {
    background: {
      default: blueGrey[100],
    },
    primary: {
      main: "#304ffe",
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
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <EventCreate />,
            action: eventCreateAction,
          },
          {
            path: ":eventId",
            element: <EventDetail />,
            loader: eventDetailLoader,
          },
          {
            path: ":eventId/edit",
            element: <EventEdit />,
          },
        ],
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
