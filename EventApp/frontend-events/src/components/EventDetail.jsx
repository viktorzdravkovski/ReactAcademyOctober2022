import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const EventDetail = (props) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeImageHandler = (event) => {
    setImage(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/events/${props.eventId}`)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response.event);
        setTitle(response.event.title);
        setDescription(response.event.description);
        setDate(response.event.date);
        setImage(response.event.image);
        setIsLoading(false);
      });
  }, [props.eventId]);

  const backToEventsClickHandler = () => {
    props.setEventId("");
  };

  const onClickUpdateHandler = () => {
    setIsLoading(true);
    fetch(`http://localhost:8080/events/${props.eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        image: image,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setEvent(response.event);
        setEditMode(false);
        setIsLoading(false);
      });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      {isLoading && (
        <Typography variant="h1" component="div">
          Loading event details...
        </Typography>
      )}
      {!isLoading && !editMode && (
        <>
          <Container sx={{ textAlign: "center" }}>
            <Typography variant="h3" component="div" gutterBottom>
              {event.title}
            </Typography>
          </Container>
          <Container sx={{ textAlign: "center", height: "60%" }}>
            <img
              src={event.image}
              alt={event.title}
              style={{ height: "40%", maxWidth: "100%" }}
            />
            <Typography variant="body2" gutterBottom>
              {event.date}
            </Typography>
            <Typography variant="subject2">{event.description}</Typography>
          </Container>
        </>
      )}
      {editMode && (
        <Stack mt={5} rowGap={5} width="80%" alignItems="center">
          <TextField
            required
            label="Event Title"
            fullWidth
            value={title}
            onChange={onChangeTitleHandler}
            variant="standard"
          />
          <TextField
            required
            label="Event Image"
            placeholder="https://..."
            fullWidth
            value={image}
            onChange={onChangeImageHandler}
            variant="standard"
          />
          <TextField
            required
            label="Event Date"
            placeholder="dd.MM.YYYY"
            fullWidth
            value={date}
            onChange={onChangeDateHandler}
            variant="standard"
          />
          <TextField
            required
            label="Event Description"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={onChangeDescriptionHandler}
            variant="standard"
          />
          <Box>
            <Button
              variant="contained"
              onClick={onClickUpdateHandler}
              color="success"
              sx={{ marginBottom: 2 }}
            >
              Update event
            </Button>
          </Box>
        </Stack>
      )}
      <Stack direction="row" columnGap={5}>
        <Button variant="contained" onClick={toggleEditMode}>
          {editMode ? "Cancel Edit" : "Edit event"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={backToEventsClickHandler}
        >
          Back to events
        </Button>
      </Stack>
    </Stack>
  );
};

export default EventDetail;
