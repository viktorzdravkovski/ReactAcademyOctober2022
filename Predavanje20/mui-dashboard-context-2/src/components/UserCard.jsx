import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const UserCard = (props) => {
  const onClickHandler = () => {
    props.deleteUser(props.user.email);
  };

  return (
    <Card>
      <Box display="flex" alignItems="center" height="80%">
        <CardHeader avatar={<Avatar>{props.user.name[0]}</Avatar>} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {props.user.name}
          </Typography>
          <Typography variant="body1">{props.user.email}</Typography>
          <Typography variant="body2">{props.user.role}</Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button onClick={() => props.deleteUser(props.user.email)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
