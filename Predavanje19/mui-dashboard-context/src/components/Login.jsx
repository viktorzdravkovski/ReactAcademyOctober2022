import { Box, Paper, Stack, FormControl, TextField } from "@mui/material";
import { CustomButton } from "./CustomButton";
import UserContext from "../context/user-context";
import { useContext } from "react";

const Login = () => {
  const userContext = useContext(UserContext);

  return (
    // <UserContext.Consumer>
    //   {(userContext) => {
    //     return (
    //       <Box
    //         display="flex"
    //         flexDirection="column"
    //         justifyContent="center"
    //         alignItems="center"
    //         height="100vh"
    //         bgcolor="primary.light"
    //       >
    //         <Paper elevation={10}>
    //           <Box
    //             width={400}
    //             bgcolor="background.default"
    //             borderRadius={5}
    //             p={10}
    //           >
    //             <form>
    //               <Stack alignItems="center" rowGap={3}>
    //                 <FormControl fullWidth>
    //                   <TextField label="E-Mail" />
    //                 </FormControl>
    //                 <FormControl fullWidth>
    //                   <TextField label="Password" type="password" />
    //                 </FormControl>
    //                 <FormControl>
    //                   <CustomButton
    //                     variant="contained"
    //                     onClick={props.login}
    //                     disabled={userContext.isLoading}
    //                   >
    //                     {userContext.isLoading && "Logging in..."}
    //                     {!userContext.isLoading && "Login"}
    //                   </CustomButton>
    //                 </FormControl>
    //               </Stack>
    //             </form>
    //           </Box>
    //         </Paper>
    //       </Box>
    //     );
    //   }}
    // </UserContext.Consumer>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="primary.light"
    >
      <Paper elevation={10}>
        <Box width={400} bgcolor="background.default" borderRadius={5} p={10}>
          <form>
            <Stack alignItems="center" rowGap={3}>
              <FormControl fullWidth>
                <TextField label="E-Mail" />
              </FormControl>
              <FormControl fullWidth>
                <TextField label="Password" type="password" />
              </FormControl>
              <FormControl>
                <CustomButton
                  variant="contained"
                  onClick={userContext.loginHandler}
                  disabled={userContext.isLoading}
                >
                  {userContext.isLoading && "Logging in..."}
                  {!userContext.isLoading && "Login"}
                </CustomButton>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
