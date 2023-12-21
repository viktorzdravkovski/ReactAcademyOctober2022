import { Container, Grid } from "@mui/material";
import EventCard from "./EventCard";
import { Link, useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return (
    <Container
      sx={{
        textAlign: "center",
        display: "flex",
        height: "80%",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "1%",
      }}
    >
      <Grid container justifyContent="center" columnGap={5} rowGap={5}>
        {events.map((event) => {
          return (
            <Grid item key={event.id} xs={12} md={3}>
              <Link to={event.id} style={{ textDecoration: "none" }}>
                <EventCard event={event} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EventsPage;

export const loader = () => {
  return fetch("http://localhost:8080/events");
};
