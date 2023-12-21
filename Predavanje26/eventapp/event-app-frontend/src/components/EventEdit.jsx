import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

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
  );
};

export default EventEdit;
