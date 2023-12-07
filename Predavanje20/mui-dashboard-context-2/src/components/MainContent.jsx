import Navbar from "./Navbar";
import { Divider, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import { useContext } from "react";
import UserContext from "../context/user-context";

const MainContent = (props) => {
  const userContext = useContext(UserContext);

  return (
    <>
      <Navbar setMode={props.setMode} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        height="100%"
        margin={0}
        bgcolor="background.default"
      >
        <Sidebar setMode={props.setMode} />
        <Divider orientation="vertical" flexItem />
        {userContext.currentRoute === "Services" && <Dashboard />}
        {userContext.currentRoute === "Users" && <UserManagement />}
      </Stack>
    </>
  );
};

export default MainContent;
