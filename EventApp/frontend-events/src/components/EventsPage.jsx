import { Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import EventCard from "./EventCard";

const EventsPage = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/events")
      .then((response) => response.json())
      .then((response) => {
        setEvents(response.events);
        setIsLoading(false);
      });
  };

  return (
    <Container
      sx={({ palette }) => ({
        textAlign: "center",
        backgroundColor: palette.background.default,
        padding: 2,
      })}
    >
      <Grid container justifyContent="center" columnGap={5} rowGap={5}>
        {events.map((event) => {
          return (
            <Grid item key={event.id} xs={12} md={3}>
              <EventCard event={event} setEventId={props.setEventId} />
            </Grid>
          );
        })}
        {isLoading && <Typography variant="h3">Loading events...</Typography>}
      </Grid>
      <Button
        variant="contained"
        onClick={onClickHandler}
        sx={{ marginTop: "3%" }}
      >
        Fetch events
      </Button>
    </Container>
  );
};

export default EventsPage;
