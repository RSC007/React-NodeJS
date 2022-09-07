import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export const Sign = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          border: 1,
          "&:hover": {
            // backgroundColor: "black"
            // opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Box component='div' sx={{borderBottom: 2}}>Sign In Here!</Box>
        <TextField
          id="username"
          label="User Name"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "3px"
          }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "3px"
          }}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "3px"
          }}
        />
        <Box component="div">
          {/* <Button variant="contained">Sign In</Button> */}
          <Button sx={{ paddingX: "20px" }} variant="contained">
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
