import { Box, Card, CardActionArea, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const OptionCard = () => {
  return (
    <Card
      sx={{
        height: { xs: 100, md: 200 },
        backgroundColor: "primary.light",
        "& .MuiTouchRipple-child": {
          backgroundColor: "info.dark",
        },
      }}
    >
      <Box height="100%" display="flex">
        <CardActionArea>
          <Box display="flex" justifyContent="center" alignItems="center">
            <SettingsIcon
              sx={{ color: "primary.contrastText", fontSize: 30, mr: 1 }}
            />
            <Typography fontSize={26} color="primary.contrastText">
              Settings
            </Typography>
          </Box>
        </CardActionArea>
      </Box>
    </Card>
  );
};

export default OptionCard;
