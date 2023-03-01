import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../LoginForm/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constant";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { userRegister } from "../../api/userRequest";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const RegisterForm = () => {
  const [error, setError] = useState();
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
  Cookies.set("id");
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = await userRegister(values);
      Cookies.set("id", user?.users?._id);
      Cookies.set("token", user.token);
      if (user.token) {
        setData(user);
        navigate(URL.HOME_PAGE);
      }
    },
  });

  return (
    <>
      <ToastContainer />

      <div className="login">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 700,
            },
          }}
          className="formMui"
        >
          <Paper elevation={3}>
            <h3 className="ProductHead">Sign-Up</h3>
            <form onSubmit={formik.handleSubmit} className="formMain">
            <TextField
                fullWidth
                id="username"
                name="username"
                label="User Name"
                className="textFiled"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helpertext={formik.touched.username && formik.errors.username}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                className="textFiled"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helpertext={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                className="textFiled"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password}
                helpertext={formik.touched.password && formik.errors.password}
                type={toggle ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setToggle(!toggle)}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {!toggle && <VisibilityIcon />}
                        {toggle && <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {error ? (
                <Alert className="alert" variant="outlined" severity="error">
                  {error.split("auth/")} !!
                </Alert>
              ) : (
                ""
              )}
              <div className="subBtn">
                <Button variant="contained" className="subBtn1" type="submit">
                  REGISTER
                </Button>
              </div>
              {/* <Link to={FORGET_PASSWORD}><Typography style={{color:'black'}}>forget password ?</Typography></Link> */}
            </form>
          </Paper>
        </Box>
      </div>
    </>
  );
};
