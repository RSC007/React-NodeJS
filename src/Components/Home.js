import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button variant="outlined">
        <Link style={{ display: "block" }} to="/linkPage">
          Link Page
        </Link>
      </Button>
    </>
  );
};

export default Home;
