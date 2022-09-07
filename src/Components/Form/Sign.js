import React from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Sign = () => {
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
    onSubmit: (values) => {
      console.log("Submit: ", values);
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          border: 1,
          "&:hover": {
            // backgroundColor: "black"
            // opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Box component="div" sx={{ borderBottom: 2 }}>
          Sign In Here!
        </Box>
        <Box component='div'>
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
        <Box component='div'>
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
        <Box component='div'>
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
            sx={{ paddingX: "20px" }}
            variant="contained"
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
