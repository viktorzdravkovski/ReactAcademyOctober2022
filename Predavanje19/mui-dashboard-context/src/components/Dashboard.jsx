import { Box, Container, Grid } from "@mui/material";
import OptionCard from "./OptionCard";

const Dashboard = () => {
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
