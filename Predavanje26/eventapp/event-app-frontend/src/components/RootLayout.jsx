import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

const RootLayout = () => {
  const navigate = useNavigate();

  const createNewEventNavigationHandler = () => {
    navigate("/events/new");
  };

  return (
    <>
      <Navbar />
      <Outlet />
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
    </>
  );
};

export default RootLayout;
