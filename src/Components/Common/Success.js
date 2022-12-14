import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Success = ({ description }) => {
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
          width: 350,
          height: 300,
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
        <h1>Success !!</h1>
        <p style={{ color: "black" }}>{description}</p>
        <Button variant="outlined">
          <Link style={{ display: "block" }} to="/linkPage">
            Link Page
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
