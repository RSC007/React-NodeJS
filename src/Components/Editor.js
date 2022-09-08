import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <>
      <h1>Editor</h1>
      <Button variant="outlined">
        <Link style={{ display: "block" }} to="/linkPage">
          Link Page
        </Link>
      </Button>
    </>
  );
};

export default Editor;
