import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const EventCreate = () => {
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

  const onClickHandler = () => {
    fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image: image,
        date: date,
        description: description,
      }),
    }).then(() => {});
  };

  return (
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
        <Button variant="contained" onClick={onClickHandler}>
          Create event
        </Button>
      </Box>
    </Stack>
  );
};

export default EventCreate;
