import {
  alpha,
  InputBase,
  styled,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
  Drawer,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CustomMenu from "./CustomMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props) => {
  const [anchorElementUser, setAnchorElementUser] = useState(null);
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const isMenuOpened = Boolean(anchorElementUser);

  const handleOpenUserMenu = (event) => {
    setAnchorElementUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElementUser(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="100%">
          <Toolbar>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            {/*Mobile View*/}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => setSideMenuOpened(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                sx={{ display: { xs: "block", md: "none" } }}
                open={sideMenuOpened}
                onClose={() => setSideMenuOpened(false)}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <CustomMenu setMode={props.setMode} />
                </Box>
              </Drawer>
            </Box>
            {/*End of mobile view*/}
            <Box
              width="100%"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              justifyContent="center"
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Seach..." />
              </Search>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                open={isMenuOpened}
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElementUser}
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top",
                }}
                transformOrigin={{
                  horizontal: "right",
                  vertical: "top",
                }}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  return (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
