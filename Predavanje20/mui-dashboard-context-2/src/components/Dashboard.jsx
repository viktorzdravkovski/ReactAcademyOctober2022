import { Box, Container, Grid, Typography } from "@mui/material";
import OptionCard from "./OptionCard";
import { useContext } from "react";
import UserContext from "../context/user-context";

const Dashboard = () => {
  const userContext = useContext(UserContext);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box maxWidth="80%">
        <Typography variant="h2" gutterBottom color="text.secondary">
          Hello, {userContext.user.name}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OptionCard />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
