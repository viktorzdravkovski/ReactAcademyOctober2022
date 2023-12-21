import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: "5%" }}>
      <Typography variant="h3">Home page</Typography>
      <Typography variant="h6">
        {/*Go to the <a href="/events">Events</a>*/}
        Go to the <Link to="events">Events</Link>
      </Typography>
    </Container>
  );
};

export default HomePage;
