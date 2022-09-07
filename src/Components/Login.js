import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import { useFormik } from "formik";

import axios from "../Api/axios";
import useAuth from "../hooks/useAuth";

import { Success } from "./Common/Success";
import { Link } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const [err, setErr] = useState("");

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors: { username: errUsername, password: errPassword },
    ...formikValues
  } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/auth", values);
        setIsLogin(true);
        setErr("");
        setAuth({ ...values, ...response.data });
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
      } catch (err) {
        if (!err?.response) {
          setErr("No server responce");
        } else if (err?.response?.status === 409) {
          setErr("Worng Credentials");
        } else {
          setErr("Registeration is filed!");
        }
      }
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("User name is required."),
      password: Yup.mixed().required("Password is required.")
    })
  });

  return (
    <>
      {!isLogin ? (
        <Box
          sx={{
            display: "flex",
            height: "inherit",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            "&:hover": {
              // backgroundColor: "black"
              // opacity: [0.9, 0.8, 0.7]
            }
          }}
        >
          {err.length ? (
            <Box component="div" sx={{ borderBottom: 2, color: "red" }}>
              {err}
            </Box>
          ) : null}
          <Box component="div" sx={{ borderBottom: 2 }}>
            Login In Here!
          </Box>
          <Box component="div">
            <TextField
              error={!!errUsername}
              id="username"
              label="User Name"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "black",
                margin: "3px"
              }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errUsername && (
              <Box component="small" sx={{ color: "red", display: "block" }}>
                {errUsername}
              </Box>
            )}
          </Box>
          <Box component="div">
            <TextField
              error={!!errPassword}
              id="password"
              label="Password"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "black",
                margin: "3px"
              }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errPassword && (
              <Box component="small" sx={{ color: "red", display: "block" }}>
                {errPassword}
              </Box>
            )}
          </Box>
          <Box component="div">
            {/* <Button variant="contained">Sign In</Button> */}
            <Button
              onClick={handleSubmit}
              sx={{ paddingX: "20px", marginX: '10px' }}
              variant="contained"
            >
              Login
            </Button>
            <Button variant="outlined" >
              <Link style={{ display: "block" }} to="/linkPage">
                Link Page
              </Link>
            </Button>
          </Box>
        </Box>
      ) : (
        <Success description="User logedIn succesfull !" />
      )}
    </>
  );
};

export default Login;
