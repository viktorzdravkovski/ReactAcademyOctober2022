import Navbar from "./Navbar";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

const RootLayout = () => {
  const navigate = useNavigate();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      console.log("NO TOKEN");
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
      return;
    }

    const duration = getTokenDuration();
    console.log(duration);
    setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, duration);
  }, [submit, token]);

  const createNewEventNavigationHandler = () => {
    navigate("/events/new");
  };

  return (
    <>
      <Navbar />
      <Outlet />
      {token && (
        <SpeedDial
          ariaLabel="SpeedDial"
          icon={<SpeedDialIcon />}
          sx={{ position: "absolute", bottom: 15, right: 15 }}
        >
          <SpeedDialAction
            icon={<EventIcon />}
            tooltipTitle="Create an event"
            onClick={createNewEventNavigationHandler}
          />
        </SpeedDial>
      )}
    </>
  );
};

export default RootLayout;
