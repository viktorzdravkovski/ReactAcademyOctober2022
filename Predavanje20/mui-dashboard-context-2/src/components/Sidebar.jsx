import { Box } from "@mui/material";
import CustomMenu from "./CustomMenu";

const Sidebar = (props) => {
  return (
    <Box
      flex="0 0 20%"
      p={2}
      bgcolor="background.default"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Box
        position="fixed"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="90%"
      >
        <CustomMenu setMode={props.setMode} />
      </Box>
    </Box>
  );
};

export default Sidebar;
