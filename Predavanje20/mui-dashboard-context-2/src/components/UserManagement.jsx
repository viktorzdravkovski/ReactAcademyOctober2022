import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import UserContext from "../context/user-context";
import UserCard from "./UserCard";

const UserManagement = () => {
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
          {userContext.managedUsers.map((user) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={user.email}>
                <UserCard user={user} deleteUser={userContext.deleteUser} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserManagement;
