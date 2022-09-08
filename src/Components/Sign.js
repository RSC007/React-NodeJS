import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "../Api/axios";

import { Success } from "./Common/Success";

const Sign = () => {
  // States
  const [isSignIn, setIsSingIn] = useState(false);
  const [err, setErr] = useState("");

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors: {
      username: errUsername,
      password: errPassword,
      confirmPassword: errConfirmPassword
    },
    ...formikValues
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async (values) => {
      const { confirmPassword, username, password } = values;
      try {
        const response = await axios.post(
          "/register",
          { username, password }

          // {
          //   headers: { 'Content-Type': 'applicaion/json', withCredentials: true },
          // },
        );
        setIsSingIn(true);
        setErr("");
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response));
      } catch (err) {
        if (!err?.response) {
          setErr("No server responce");
        } else if (err?.response?.status === 409) {
          formikValues.setErrors({ username: err?.response?.data?.message });
        } else {
          setErr("Registeration is filed!");
        }
      }
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("User name is required."),
      password: Yup.mixed().required("Password is required."),
      confirmPassword: Yup.mixed()
        .required("Password is not matched!")
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.mixed().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          )
        })
    })
  });

  return (
    <>
      {!isSignIn ? (
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
            Sign In Here!
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
            <TextField
              error={!!errConfirmPassword}
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: "black",
                margin: "3px"
              }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errConfirmPassword && (
              <Box component="small" sx={{ color: "red", display: "block" }}>
                {errConfirmPassword}
              </Box>
            )}
          </Box>
          <Box component="div">
            {/* <Button variant="contained">Sign In</Button> */}
            <Button
              onClick={handleSubmit}
              sx={{ paddingX: "20px", marginX: "5px" }}
              variant="contained"
            >
              Sing In
            </Button>
            <Button variant="outlined">
              <Link style={{ display: "block" }} to="/linkPage">
                Link Page
              </Link>
            </Button>
          </Box>
          <Box component="p">
            <Link style={{ display: "block" }} to="/login">
              Already have a account.
            </Link>
          </Box>
        </Box>
      ) : (
        <Success description="User registeration succesfull !" />
      )}
    </>
  );
};

export default Sign;
