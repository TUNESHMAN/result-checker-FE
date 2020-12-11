import React, { useState } from "react";
import "../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
// import logo from "../images/RunLOGO.png";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  const initialValues = {
    username: "",
    password: "",
  };
  // To set the message to state
  const [message, setMessage] = useState("");

  const onSubmit = (values, tools) => {
    axios
      .post("https://redeemers-result.herokuapp.com/user/login", values)
      .then((res) => {
        // We retrieve the token from our response and store it in local storage
        localStorage.setItem("token", res.data.token);
        setMessage(`${res.data.message}`);

        props.history.push("/result");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  <div className={classes.root}>
    <Alert variant="filled" severity="success">
      {message}
    </Alert>
  </div>;

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter matric number"),
    password: Yup.string().required("Password is needed"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div>
      <div class="login-box">
        <img
          // src={require('../images/RunLOGO.png')}
          src="RunLOGO.png"
          alt="logo"
          style={{ marginLeft: "120px", height: "80px" }}
        />
        <h2>Portal Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div class="user-box">
            <input
              placeholder="Matric number"
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <span className="error-message">{formik.errors.username}</span>
            ) : null}
            <label>Matric Number</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <label>Password</label>
          </div>
          <button type="submit">
            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
