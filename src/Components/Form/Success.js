import React from "react";
import { Box } from "@mui/system";

export const Success = () => {
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
          width: 450,
          height: 400,
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          gap: 2,
          border: 1,
          color: "white",
          backgroundColor: "#58e4fb",
          "&:hover": {
            // backgroundColor: "black"
            // opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <h1>Success</h1>
        <p style={{ color: 'black'}}>User Login succesfully!</p>
      </Box>
    </Box>
  );
};
