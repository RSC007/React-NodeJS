import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>Admin</h1>
      <Button variant="outlined">
        <Link style={{ display: "block" }} to="/linkPage">
          Link Page
        </Link>
      </Button>
    </>
  );
};

export default Admin;
