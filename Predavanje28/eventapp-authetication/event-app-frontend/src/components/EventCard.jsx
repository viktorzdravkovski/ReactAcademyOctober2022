import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const EventCard = (props) => {
  const { event } = props;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={onClickHandler}>
        <CardMedia image={event.image} sx={{ height: "10rem" }} />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2">{event.title}</Typography>
        <Typography variant="body2">{event.date}</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="subject2" noWrap>
            {event.description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
