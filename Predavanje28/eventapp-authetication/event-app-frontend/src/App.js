import "./App.css";
import EventsPage, { loader as eventsLoader } from "./components/EventsPage";
import EventCreate from "./components/EventCreate";
import { createTheme, styled, ThemeProvider } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import EventDetail, {
  loader as eventDetailLoader,
} from "./components/EventDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import EventEdit, { action as eventEditAction } from "./components/EventEdit";
import AuthPage, { action as authAction } from "./components/AuthPage";
import { action as logoutAction } from "./components/Logout";
import { getAuthToken, checkAuthLoader } from "./util/auth";

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
//   </Route>,
// );
//
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: getAuthToken,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        // /events
        path: "events",
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            // /events/new
            path: "new",
            element: <EventCreate />,
            loader: checkAuthLoader,
          },
          {
            // /events/:eventId
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              {
                // /events/:eventId/edit
                path: "edit",
                element: <EventEdit />,
                action: eventEditAction,
                loader: checkAuthLoader,
              },
            ],
          },
        ],
      },
      {
        path: "auth",
        element: <AuthPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction,
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
        <RouterProvider router={router}></RouterProvider>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
