import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const EventCard = (props) => {
  const { event, setEventId } = props;

  return (
    <Card>
      <CardActionArea onClick={() => setEventId(event.id)}>
        <CardMedia image={event.image} sx={{ height: "10rem" }} />
        <CardContent>
          <Typography variant="body2" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" component="div">
            {event.date}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
