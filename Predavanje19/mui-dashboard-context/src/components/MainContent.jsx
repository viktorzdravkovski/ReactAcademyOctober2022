import Navbar from "./Navbar";
import { Divider, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const MainContent = (props) => {
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
        <Dashboard />
      </Stack>
    </>
  );
};

export default MainContent;
