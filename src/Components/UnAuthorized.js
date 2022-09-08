import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UnAuthorized = () => {
  return (
    <>
      <h1>UnAuthorized</h1>
      <p>Your not authorize for this page.</p>
      <Button variant="outlined">
        <Link style={{ display: "block" }} to="/linkPage">
          Link Page
        </Link>
      </Button>
    </>
  );
};

export default UnAuthorized;
