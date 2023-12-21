import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Form, redirect } from "react-router-dom";

const EventCreate = () => {
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

  return (
    <Container sx={{ width: "40%" }}>
      <Form method="post">
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
            rows={3}
            fullWidth
            value={description}
            onChange={onChangeDescriptionHandler}
            name="description"
          />
          <Button variant="contained" type="submit">
            Create event
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default EventCreate;

export const action = ({ request, params }) => {
  return request.formData().then((data) => {
    const event = {
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description"),
    };

    return fetch("http://localhost:8080/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((response) => response.json())
      .then((response) => {
        return redirect("/events");
      });
  });
};
