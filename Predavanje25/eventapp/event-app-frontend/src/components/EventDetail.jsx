import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const [editMode, setEditMode] = useState(false);
  const [event, setEvent] = useState({
    title: "",
    desctiption: "",
    image: "",
    date: "",
  });
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/events/${params.eventId}`)
      .then((response) => response.json())
      .then((response) => {
        setEvent(response.event);
        setTitle(response.event.title);
        setDate(response.event.date);
        setImage(response.event.image);
        setDescription(response.event.description);
      });
  }, [params.eventId]);

  const backToEventsClickHandler = () => {
    // props.setEventId("");
  };

  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

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

  const onClickUpdateEventHandler = () => {
    // fetch(`http://localhost:8080/events/${props.eventId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     image: image,
    //     date: date,
    //     description: description,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setEvent(response.event);
    //     setEditMode(false);
    //   });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      {editMode && (
        <Stack alignItems="center" width="80%" rowGap={5} mt={5}>
          <TextField
            label="Event Title"
            variant="standard"
            fullWidth
            value={title}
            onChange={onChangeTitleHandler}
          />
          <TextField
            label="Event Image"
            variant="standard"
            placeholder="https://..."
            fullWidth
            value={image}
            onChange={onChangeImageHandler}
          />
          <TextField
            label="Event Date"
            variant="standard"
            placeholder="dd.MM.YYYY"
            fullWidth
            value={date}
            onChange={onChangeDateHandler}
          />
          <TextField
            label="Event Description"
            variant="standard"
            multiline
            rows={3}
            fullWidth
            value={description}
            onChange={onChangeDescriptionHandler}
          />
          <Button
            variant="contained"
            onClick={onClickUpdateEventHandler}
            color="success"
            sx={{ marginBottom: 2 }}
          >
            Update event
          </Button>
        </Stack>
      )}
      {!editMode && (
        <>
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
        </>
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
