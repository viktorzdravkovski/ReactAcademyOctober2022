import { Container, Box, Stack, Divider, Grid } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      {/*<Container>*/}
      {/*  <Box sx={{ backgroundColor: "red", width: "200px", height: "200px" }}>*/}
      {/*    Box*/}
      {/*  </Box>*/}
      {/*  <Box bgcolor="blue" width="200px" height="200px">*/}
      {/*    Box*/}
      {/*  </Box>*/}
      {/*</Container>*/}
      {/*<Stack*/}
      {/*  direction="row"*/}
      {/*  spacing={10}*/}
      {/*  divider={<Divider orientation="vertical" flexItem />}*/}
      {/*>*/}
      {/*  <Box bgcolor="blue" width="200px" height="200px" component="section">*/}
      {/*    Box*/}
      {/*  </Box>*/}
      {/*  <Box bgcolor="red" width="200px" height="200px" component="section">*/}
      {/*    Box*/}
      {/*  </Box>*/}
      {/*  <Box bgcolor="yellow" width="200px" height="200px" component="section">*/}
      {/*    Box*/}
      {/*  </Box>*/}
      {/*</Stack>*/}
      <Grid
        container
        columnSpacing={2}
        rowSpacing={{ xs: 2, sm: 5, md: 8, lg: 12, xl: 20 }}
      >
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Box bgcolor="red" width="200px" height="200px" component="section">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Box bgcolor="blue" width="200px" height="200px" component="section">
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Box
            bgcolor="yellow"
            width="200px"
            height="200px"
            component="section"
          >
            Box
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Box bgcolor="green" width="200px" height="200px" component="section">
            Box
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
