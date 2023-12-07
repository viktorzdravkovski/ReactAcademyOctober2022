import { Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MuiButtons = () => {
  return (
    <>
      <div>
        <Button variant="contained">Contained</Button>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </div>
      <div>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
      </div>
      <div>
        <IconButton color="error">
          <SendIcon />
        </IconButton>
      </div>
      <div>
        <Button variant="contained" size="large" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" size="large" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div style={{ marginTop: "50px" }}>
        <ButtonGroup variant="contained">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
      <div style={{ marginTop: "50px" }}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="large"
          color="error"
        >
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default MuiButtons;
