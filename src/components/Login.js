import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import facebook from "../imgs/fb.jpg";
import insta from "../imgs/insta.jpg";
import twitter from "../imgs/twitter.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cookie from "js-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInput = React.useRef(null);
  const toggler = React.useRef(null);

  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/home3");
  };
  const forgotpassword = () => {
    navigateFunc("/forgotpassword");
  };
  const signup = () => {
    navigateFunc("/signup");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      const data = response.data;
      console.log(data);
      cookie.set("jwtAuth", data.token);
      console.log("User Login successfully!");
      toast.success("Logged in Successfully!");

      navigateFunc("/index");
    } catch (err) {
      console.log(err);
      toast.error("Invalid Credentials!");
    }
  };

  const solve = (event) => {
    event.preventDefault();
    const email = document.getElementById("first").value;
    const password = passwordInput.current.value;
  };

  return (
    <>
      <ToastContainer />
      <div style={{ overflow: "hidden" }}>
        <div style={{ position: "relative", height: "50px" }}>
          <button
            className="btn-1"
            onClick={handleSkip}
            style={{ position: "absolute", bottom: "0" }}
          >
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className="text-content">
          <h1>Sign in now</h1>
          <div>
            <p>Please sign in to continue our app</p>
          </div>
        </div>
        <br></br>
        <div className="body">
          <form onSubmit={solve}>
            <input
              type="email"
              id="first"
              placeholder="Enter your Email"
              value={email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="password-field">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                name="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="c f">
              <a
                href="#"
                style={{ textDecoration: "none", fontSize: "13px" }}
                onClick={forgotpassword}
              >
                Forget Password?
              </a>
            </div>
            <div class="wrap">
              <button className="button" onClick={submitHandler} type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="p">
            Don't have an account?
            <a href="#" style={{ textDecoration: "none" }} onClick={signup}>
              <span> </span>Sign up
            </a>
            <br></br>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or
              connect
            </span>
          </p>
          <br></br>
          <div id="social">
            <a href="https://www.facebook.com">
              {" "}
              <img id="imgg" src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img id="imgg" src={insta} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/i/flow/login">
              {" "}
              <img id="imgg" src={twitter} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
