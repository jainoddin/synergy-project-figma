import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import facebook from '../imgs/fb.jpg'
import insta from'../imgs/insta.jpg'
import twitter from '../imgs/twitter.png'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import OTPInput, { ResendOTP } from "otp-input-react";



const Signup  = () => {
  
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [sendingOTP, setSendingOTP] = useState(false);
    const [otpValue, setOtpValue] = useState(""); 
    const [emailValue, setemailValue] = useState('');

  const handleInputChange = (text) => {
    setOtpValue(text); // Update OTP value state
  };

  const HandleFormData = (e) => {
    const { name, value } = e.target;
    SetFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigateFunc = useNavigate();

  const handleSkip = () => {
    navigateFunc("/Login")
  };

  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const sendOTPToEmail = (email, otp) => {
    const serviceId = 'service_tdbb3rg';
    const templateId = 'template_j773w8h';
    const userId = 'G-5XyfNHUsUyFnEgU';
    var params ={
      otp: otp,
      from_name:"jainoddin_project",
      toemail:email,
    }

    emailjs.send(serviceId, templateId, params, userId).then(
      (response) => {
        console.log('Email sent successfully!', response.status);
      },
      (error) => {
        console.log('Error sending email:', error);
      }
    );
  }

  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
  }
  const forgotpassword=()=>{
    navigateFunc("/forgotpassword")
  }
  const signin=()=>{
    navigateFunc("/Login")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setemailValue(e.target.value);
    setEmail(emailValue);
    setOtp('');
    setSendingOTP(true);
    const otpValue = generateOTP();
    setOtp(otpValue);
    sendOTPToEmail(FormData.email, otpValue);
    setSendingOTP(false);
    setOtpSent(true); 
  }


  const handleResendClick = () => {
    setOtp('');
    setEmail(FormData.email);

    setSendingOTP(true);
    const otpValue = generateOTP();
    setOtp(otpValue);
    sendOTPToEmail(FormData.email,otpValue);
    setSendingOTP(false);
    setOtpSent(true);
  };
  
  const otpcomper=otp
  const verifyOTP2 =async (e)=>{
    e.preventDefault();  
    if (otpValue == otpcomper) {
      try{
        const response = await fetch("http://localhost:4000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(FormData),
        });    
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }   
        console.log("User registered successfully!");
        navigateFunc("/Login");
     } catch (err) {
        console.error("Error registering user:", err.message);
        toast.error("Registration Failed! Try Again Later.");
      }    
    } else {
      toast.error("invaild OTP")
    }
  }

  return (
    <>
    <ToastContainer></ToastContainer>
    <navigateFunc></navigateFunc>
    {!otpSent ? ( <div style={{overflow:"hidden"}}>
        <div style={{ position: 'relative', height: '50px' }}>
          <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className='text-content'>
          <h1>Sign in now</h1>
          <div>
            <p>Please fill the details and create account</p>
          </div>
        </div>
        <br></br>
        <div className='body'>
          <form id="sendOTPForm" onSubmit={handleSubmit}>
          <input type="text" id="first"  placeholder="Enter your Name" value={FormData.name}
                      name="name"
                      onChange={HandleFormData} required />

            <input type="email" id="email" placeholder="Enter your Email"   value={FormData.email}
                      name="email"
                      onChange={HandleFormData} required />
            <div className="password-field">
              <input  id="password" placeholder="Enter Password" value={FormData.password}
                      name="password"
                      onChange={HandleFormData} />
            </div>
            <div className='c f'>
            <a href="#" style={{ textDecoration: "none" ,fontSize:"13px" }} onClick={forgotpassword}>
              Forget Password?
            </a>
            </div>
            <div class="wrap">
            <button className='button' type="submit" disabled={sendingOTP}>
          {sendingOTP ? 'Sending OTP...' : 'Send OTP'}
        </button>
            </div>
          </form>
          <p className='p'>Already have an account? 
            <a href="#" style={{ textDecoration: "none" }} onClick={signin}>
              <span> </span>Sign in
            </a>
            <br></br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Or connect</span>
          </p>
          <div id="social">
          <a href='https://www.facebook.com'>  <img  id='imgg'  src={facebook} alt="Facebook"/></a>
      <a href='https://www.instagram.com/'><img id='imgg' src={insta} alt="LinkedIn"/></a>
     <a href='https://twitter.com/i/flow/login'> <img id='imgg'  src={twitter} alt="Instagram"/></a>
    </div>
        </div>
      </div>
           ) : (
            <div style={{overflow:"hidden"}}>
        <div style={{ position: 'relative', height: '50px' }}>
          <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className='text-content'>
          <h1>Otp Verification</h1>
          <div>
            <p>Please check your email wwww.uihut@gmail.com to see the Verification code</p>
          </div>
        </div>
        <br></br>
        <div className='body'>
          <form id="sendOTPForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
      <OTPInput 
        value={otpValue} 
        onChange={handleInputChange} 
        autoFocus 
        OTPLength={6} 
        otpType="number" 
        disabled={false} 
        secure 
      />
      <ResendOTP onResendClick={handleResendClick} />
    </div>
            <div className='c f'>          
            </div>
            <div class="wrap">
            <button className='button' type="submit" onClick={verifyOTP2}>
            Verify OTP
          </button>
            </div>
          </form>          
        </div>
      </div>           
      )} 
    </>
  )
}

export default Signup;