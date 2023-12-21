import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const EventDetail = () => {
  const data = useLoaderData();
  const event = data.event;
  const navigate = useNavigate();

  const toggleEditMode = () => {
    navigate("edit");
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Container sx={{ textAlign: "center" }}>
        <Typography>{event.title}</Typography>
      </Container>
      <Container sx={{ textAlign: "center", height: "60%" }}>
        <img
          src={event.image}
          alt={event.title}
          style={{ height: "40%", maxWidth: "100%" }}
        />
        <Typography variant="body2">{event.date}</Typography>
        <Typography variant="subject2">{event.description}</Typography>
      </Container>
      <Stack direction="row" columnGap={5}>
        <Button variant="contained" onClick={toggleEditMode}>
          Edit event
        </Button>
        <Link to=".." relative="path">
          <Button variant="contained" color="secondary">
            Back to events
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default EventDetail;

export const loader = ({ request, params }) => {
  return fetch(`http://localhost:8080/events/${params.eventId}`);
};
