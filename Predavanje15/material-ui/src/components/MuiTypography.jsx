import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eveniet
        fugiat inventore porro, quia temporibus voluptates? Alias distinctio
        minima modi mollitia necessitatibus nulla quia quos, repellat
        repudiandae temporibus veritatis voluptatum!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eveniet
        fugiat inventore porro, quia temporibus voluptates? Alias distinctio
        minima modi mollitia necessitatibus nulla quia quos, repellat
        repudiandae temporibus veritatis voluptatum!
      </Typography>

      <Typography variant="h6" component="div">
        Heading 6
      </Typography>
    </>
  );
};

export default MuiTypography;
