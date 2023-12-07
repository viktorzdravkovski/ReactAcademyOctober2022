import { Badge, Container, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={5} color="primary" max={100}>
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="primary">
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="secondary" invisible>
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="primary" max={100} showZero>
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={0}
          color="primary"
          max={100}
          showZero
          overlap="rectangular"
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={10}
          color="primary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MailIcon />
        </Badge>
      </Stack>
    </Container>
  );
};

export default MuiBadge;
