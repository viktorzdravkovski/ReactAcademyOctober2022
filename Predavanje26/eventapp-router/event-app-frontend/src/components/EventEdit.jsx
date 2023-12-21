import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";

const EventEdit = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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
    <Container sx={{ width: "40%" }}>
      <Stack
        alignItems="center"
        rowGap={5}
        mt={5}
        display={{ xs: "none", md: "flex" }}
      >
        <TextField
          label="Event Title"
          variant="standard"
          fullWidth
          value={title}
          onChange={onChangeTitleHandler}
          name="title"
        />
        <TextField
          label="Event Image"
          variant="standard"
          placeholder="https://..."
          fullWidth
          value={image}
          onChange={onChangeImageHandler}
          name="image"
        />
        <TextField
          label="Event Date"
          variant="standard"
          placeholder="dd.MM.YYYY"
          fullWidth
          value={date}
          onChange={onChangeDateHandler}
          name="date"
        />
        <TextField
          label="Event Description"
          variant="standard"
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={onChangeDescriptionHandler}
          name="description"
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
    </Container>
  );
};

export default EventEdit;
