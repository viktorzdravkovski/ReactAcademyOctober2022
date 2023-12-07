import { Paper, Container, Box } from "@mui/material";

const MuiPaper = () => {
  return (
    <Container>
      <Paper variant="outlined">
        <Box bgcolor="primary" width={400} height={500}></Box>
      </Paper>
      <Paper elevation={10}>
        <Box bgcolor="primary" width={400} height={500}></Box>
      </Paper>
      <Paper elevation={10} square>
        <Box bgcolor="primary" width={400} height={500}></Box>
      </Paper>
    </Container>
  );
};

export default MuiPaper;
