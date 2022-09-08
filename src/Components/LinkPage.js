import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Api/axios";
import useAuth from "../hooks/useAuth";

const LinkPage = () => {
  const navigate = useNavigate()
  const goBack = () => navigate('/registor')
  const { auth, setAuth } = useAuth()

  const logout = () => {
    axios.get('/logout')
    goBack()
    setAuth({})
  }
  
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

      {auth?.username && <Button variant="contained" sx={{ marginTop: '5rem'}} onClick={logout}>
        Logout
      </Button>}
    </Box>
  );
};

export default LinkPage;
