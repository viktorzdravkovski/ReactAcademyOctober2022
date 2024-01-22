import { Container, Grid } from "@mui/material";
import EventCard from "./EventCard";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center" columnGap={5} rowGap={5}>
        {events.map((event) => {
          return (
            <Grid item key={event.id} xs={12} md={3}>
              <EventCard event={event} />
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
