import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

import "./Style/Layout.css";

export const Layout = () => {
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
          padding: '20px',
          gap: 2,
          border: 1,
          "&:hover": {
            // backgroundColor: "black"
            // opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
