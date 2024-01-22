import { Button, Container, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useRouteLoaderData, Form, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

const EventEdit = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [description, setDescription] = useState(event.description);
  const [image, setImage] = useState(event.image);
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
    <Container sx={{ width: "60%" }}>
      <Form method="put">
        <Stack alignItems="center" width="80%" rowGap={5} mt={5}>
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
            color="success"
            sx={{ marginBottom: 2 }}
            type="submit"
          >
            Update event
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default EventEdit;

export const action = async ({ request, params }) => {
  const token = getAuthToken();
  const data = await request.formData();

  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        location: "DummyLocation",
        description: data.get("description"),
      }),
    },
  );

  return redirect("..");
};
