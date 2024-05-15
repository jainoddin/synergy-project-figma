import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import facebook from '../imgs/fb.jpg'
import insta from'../imgs/insta.jpg'
import twitter from '../imgs/twitter.png'
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [passwordType, setPasswordType] = useState('password');

  const passwordInput = React.useRef(null);
  const toggler = React.useRef(null);

  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/home3");
  };
  const forgotpassword=()=>{
    navigateFunc("/forgotpassword")
  }
  const signup=()=>{
    navigateFunc("/signup")
  }
  const Login=()=>{
    try {
      navigateFunc("/index")
      
    } catch (error) {
      console.log(error);
      
    }
  }

 

  const solve = (event) => {
    event.preventDefault();
    const email = document.getElementById('first').value;
    const password = passwordInput.current.value;

    // Perform form validation or submit the form data here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <div style={{overflow:"hidden"}}>
        <div style={{ position: 'relative', height: '50px' }}>
          <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className='text-content'>
          <h1>Sign in now</h1>
          <div>
            <p>Please sign in to continue our app</p>
          </div>
        </div>
        <br></br>
        <div className='body'>
          <form onSubmit={solve}>
            <input type="email" id="first" name="first" placeholder="Enter your Email" required />
            <div className="password-field">
            <input 
    type="password" 
    placeholder="Enter Password" 
  />
            </div>
            <div className='c f'>
            <a href="#" style={{ textDecoration: "none" ,fontSize:"13px" }} onClick={forgotpassword}>
              Forget Password?
            </a>
            </div>
            <div class="wrap">
              <button className='button' onClick={Login} type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className='p'>Don't have an account? 
            <a href="#" style={{ textDecoration: "none" }} onClick={signup}>
              <span> </span>Sign up
            </a>
            <br></br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or connect</span>
          </p>
          <br></br>
          <div id="social">
    <a href='https://www.facebook.com'>  <img  id='imgg'  src={facebook} alt="Facebook"/></a>
      <a href='https://www.instagram.com/'><img id='imgg' src={insta} alt="LinkedIn"/></a>
     <a href='https://twitter.com/i/flow/login'> <img id='imgg'  src={twitter} alt="Instagram"/></a>
    </div>
        </div>
      </div>
    </>
  )
}

export default Login;

