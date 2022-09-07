import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <Box
      sx={{
        height: "inherit",
        "&:hover": {
          // backgroundColor: "black"
          // opacity: [0.9, 0.8, 0.7]
        }
      }}
    >
      <Box sx={{ paddingBottom: '20px', display: "flex", flexDirection: "column", gap: 1 }}>
        <h3>Public</h3>
        <Link to="/registor">Sign In</Link>
        <Link to="/login">Log In</Link>
        <Link to="/linkPage">Link Page</Link>
        <Link to="/unAuthorized">UnAuthorized</Link>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <h3>Private</h3>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/editor">Editor</Link>
      </Box>
    </Box>
  );
};

export default LinkPage;
