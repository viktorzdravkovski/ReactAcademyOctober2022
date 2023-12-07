import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  CardMedia,
  Button,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Container>
      <Box width={400} height={400}>
        <Card elevation={10}>
          <CardMedia
            component="img"
            height={150}
            image="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt="Coffee"
          />
          <CardHeader title="React" />
          <CardContent>
            <Typography variant="body2" component="div">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              assumenda blanditiis cumque, eaque fuga numquam possimus quas
              quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa minus
              nisi officia voluptates!
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
            <Button>Share</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default MuiCard;
