import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const Root = () => {
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
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
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

export default Root;
