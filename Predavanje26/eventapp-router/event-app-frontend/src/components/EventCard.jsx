import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  const { event } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <Card>
      {/*<CardActionArea onClick={onClickHandler}>*/}
      <CardMedia image={event.image} sx={{ height: "10rem" }} />
      <CardContent>
        <Typography variant="body2">{event.title}</Typography>
        <Typography variant="body2">{event.date}</Typography>
        <Typography variant="subject2">{event.description}</Typography>
      </CardContent>
      {/*</CardActionArea>*/}
    </Card>
  );
};

export default EventCard;
