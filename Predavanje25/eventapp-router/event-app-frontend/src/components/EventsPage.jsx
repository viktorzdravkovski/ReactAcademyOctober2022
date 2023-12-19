import { Container, Grid } from "@mui/material";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

const EventsPage = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((response) => {
        setEvents(response.events);
      });
  }, []);

  return (
    <Container
      sx={{
        textAlign: "center",
        display: "flex",
        height: "80%",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" columnGap={5} rowGap={5}>
        {events.map((event) => {
          return (
            <Grid item key={event.id} xs={12} md={3}>
              <EventCard event={event} setEventId={props.setEventId} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EventsPage;