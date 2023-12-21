import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const EventDetail = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const event = data.event;

  const toggleEditMode = () => {
    navigate("edit");
  };

  return (
    <Stack justifyContent="center" alignItems="center" mt={5}>
      <Container sx={{ textAlign: "center" }}>
        <Typography>{event.title}</Typography>
      </Container>
      <Container sx={{ textAlign: "center", height: "60%" }}>
        <img
          src={event.image}
          alt={event.title}
          style={{ height: "10%", maxWidth: "100%" }}
        />
        <Typography variant="body2">{event.date}</Typography>
        <Typography variant="subject2">{event.description}</Typography>
      </Container>
      <Stack direction="row" columnGap={5}>
        <Button variant="contained" onClick={toggleEditMode}>
          Edit event
        </Button>
        <Button variant="contained" color="secondary">
          <Link
            to={".."}
            style={{ textDecoration: "none", color: "white" }}
            relative="path"
          >
            Back to events
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default EventDetail;

export const loader = ({ request, params }) => {
  return fetch(`http://localhost:8080/events/${params.eventId}`);
};
