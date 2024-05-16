import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import OTPInput, { ResendOTP } from "otp-input-react";
import cookie from "js-cookie";
import axios from "axios";



const ForgotPassword  = () => { 
    const [otp, setOtp] = useState('');
    const[ConfrmPassword,setConfrmPassword]=useState(false)
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(1);
    const [sendingOTP, setSendingOTP] = useState(false);
    const [otpValue, setOtpValue] = useState(""); 
    const [emailValue, setemailValue] = useState('');
    const[a,seta]=useState(true);
    const[b,setb]=useState(false);
    const[c,setc]=useState(false);





  const handleInputChange = (text) => {
    setOtpValue(text); // Update OTP value state
  };
  const navigateFunc = useNavigate();

  const handleSkip = () => {
    window.location.reload();
  };

  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const sendOTPToEmail = (email, otp) => {
    const serviceId = 'service_bz75du9';
    const templateId = 'template_nzhj6bn';
    const userId = 'yyZrouw_8ZNT_cEge';
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

  const handleSubmitt= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/emailcheck", {
        email,
      });
      const data = response.data;
      cookie.set("jwtAuth", data.token);
      toast.success("OTP is sent your Email Address");
      
      handleSubmit(e);  
    } catch (err) {
      console.log(err);
      toast.error("Invalid Credentials!");
    }  
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value; 
    setemailValue(emailValue);
    setEmail(emailValue);
    setOtp('');
    setSendingOTP(true);
    const otpValue = generateOTP();
    setOtp(otpValue);
    sendOTPToEmail(emailValue, otpValue);
    setSendingOTP(false);
    setOtpSent(2); 
      }

  const handleResendClick = () => {
    setOtp('');
    setEmail(email);
    setSendingOTP(true);
    const otpValue = generateOTP();
    setOtp(otpValue);
    sendOTPToEmail(email,otpValue);
    setSendingOTP(false);
    setOtpSent(2);
   
  };
  
  const otpcomper=otp
  const verifyOTP2 =async (e)=>{
    e.preventDefault();  
    if (otpValue == otpcomper) {
     setOtpSent(3)
    }
    else{
      toast.error("invaild OTP")
    }
  }

  //conf

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState('');
 

  const passwordInput = React.useRef(null);
  const toggler = React.useRef(null);

   console.log("passwod",password)
  

  const handleSubmittt = async (event) => {
    event.preventDefault();
    if(password===newPassword){
        
    


    try {
      const response = await axios.post('http://localhost:4000/updatepassword', {
        email:email,
        newPassword,
      });
      
      if (response.status === 200) {
        toast.success("Password changed successfully");
       
          setTimeout(() => {
            navigateFunc("/Login")

          }, 2000); // 20 seconds
       
      
        
      } else {
        toast.error("Failed to change password");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to change password");
    }
  }else{
    toast.error("Password not matched")
  }
  };
  return (
    <>
    <ToastContainer></ToastContainer>
    <navigateFunc></navigateFunc>
    {otpSent==1?  ( <div style={{overflow:"hidden"}}>
        <div style={{ position: 'relative', height: '50px' }}>
          <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className='text-content'>
          <h1>Forgot password</h1>
          <div>
            <p>Enter your email account to reset your password</p>
          </div>
        </div>
        <br></br>
        <div className='body'>
          <form id="sendOTPForm" onSubmit={handleSubmitt}>
            <input type="email" id="email" placeholder="Enter your Email"   value={email}
                      name="Email"
                      onChange={(e)=>setEmail(e.target.value)} required />        
            <div class="wrap">
            <button className='button'  type="submit" disabled={sendingOTP}>
          {sendingOTP ? 'Sending OTP...' : 'Reset Password'}
        </button>
            </div>
          </form>
        </div>
      </div>
           ):otpSent==2 ?  (
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
      ): (
        
         <div style={{overflow:"hidden"}}>
           <navigateFunc></navigateFunc>
         <div style={{ position: 'relative', height: '50px' }}>
           <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
             <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
           </button>
         </div>
         <div className='text-content'>
           <h1>Change password</h1>
           <div>
             <p>Enter your NewPassword and ConfrmPassword</p>
           </div>
         </div>
         <br></br>
         <div className='body'>
           <form onSubmit={handleSubmittt}>
             <input type="text" id="first" placeholder="Enter New Password" value={password}
                       name="Email"
                       onChange={(e)=>setPassword(e.target.value)} required />
             <div className="password-field">
               <input 
                 type="password" 
                 placeholder="Enter ConfrmPassword" value={newPassword}
                 name="Password"
                 onChange={(e)=>setNewPassword(e.target.value)}
               />
             </div>
 
             <div class="wrap">
               <button className='button' type="submit">
                 Submit
               </button>
             </div>
           </form>
         </div>
       </div>

      )}
    </>
  )
}

export default ForgotPassword;

