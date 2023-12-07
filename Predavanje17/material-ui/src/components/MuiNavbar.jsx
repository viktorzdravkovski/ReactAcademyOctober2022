import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";

const MuiNavbar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const isMenuOpened = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <AdbIcon />
        <Typography variant="h5" component="div">
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Stack direction="row">
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            Resources
          </Button>
          <Button sx={{ color: "white" }}>About us</Button>
          <Button sx={{ color: "white" }}>Contact</Button>
        </Stack>
        <Menu
          open={isMenuOpened}
          anchorEl={anchorElement}
          onClose={handleClose}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <MenuItem>
            <Typography>Prices</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Downloads</Typography>
          </MenuItem>
          <MenuItem>
            <Typography>Services</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
