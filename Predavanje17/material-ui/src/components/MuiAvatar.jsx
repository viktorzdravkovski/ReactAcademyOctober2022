import { Avatar, Container, Stack, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Container>
      <Stack rowGap={3}>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Avatar>VZ</Avatar>
          <Avatar src="https://www.clipartmax.com/png/middle/248-2487966_matthew-man-avatar-icon-png.png">
            AD
          </Avatar>
          <Avatar sx={{ bgcolor: "primary.light", color: "secondary.dark" }}>
            SA
          </Avatar>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Avatar variant="square">VZ</Avatar>
          <Avatar variant="square">AD</Avatar>
          <Avatar
            variant="square"
            sx={{ bgcolor: "primary.light", color: "secondary.dark" }}
          >
            SA
          </Avatar>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Avatar variant="rounded">VZ</Avatar>
          <Avatar variant="rounded">AD</Avatar>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "primary.light", color: "secondary.dark" }}
          >
            SA
          </Avatar>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <AvatarGroup variant="circular" max={6}>
            <Avatar>VZ</Avatar>
            <Avatar>AD</Avatar>
            <Avatar sx={{ bgcolor: "primary.light", color: "secondary.dark" }}>
              SA
            </Avatar>
            <Avatar>DA</Avatar>
            <Avatar>MK</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
            <Avatar>FD</Avatar>
          </AvatarGroup>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MuiAvatar;
