import React from "react";
import { Box, Button, Link as NavLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  return (
    <Box component='div' sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <h1>Home</h1>
      <NavLink variant="outlined">
        <Link style={{ display: "block" }} to="/admin">
          Go to Admin Page
        </Link>
      </NavLink>
      <NavLink variant="outlined">
        <Link style={{ display: "block" }} to="/editor">
          Go to Editor Page
        </Link>
      </NavLink>
      <NavLink variant="outlined">
        <Link style={{ display: "block" }} to="/linkPage">
          Go to Linkpage
        </Link>
      </NavLink>
      <Button variant="outlined" onClick={goBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default Home;
