import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  const onChangeHandler = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        {value === 0 && <Box bgcolor="red" height={600}></Box>}
        {value === 1 && <Box bgcolor="blue" height={600}></Box>}
        {value === 2 && <Box bgcolor="green" height={600}></Box>}
      </Container>
      <BottomNavigation
        sx={{ position: "absolute", width: "100%", bottom: 0 }}
        showLabels
        value={value}
        onChange={onChangeHandler}
      >
        <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        <BottomNavigationAction
          icon={<FavoriteBorderIcon />}
          label="Favorites"
        />
        <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
      </BottomNavigation>
    </>
  );
};

export default MuiBottomNavigation;
