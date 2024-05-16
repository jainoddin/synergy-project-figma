import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { useNavigate,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookie from "js-cookie";
import axios from "axios";

const Confrpwd = (email) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState('');
  console.log("aaaaaaa",email)

  const passwordInput = React.useRef(null);
  const toggler = React.useRef(null);

  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/home3");
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/updatepassword', {
        email:"skjainoddin39854@gmail.com",
        newPassword,
      });

      if (response.status === 200) {
        toast.success("Password changed successfully");
      } else {
        toast.error("Failed to change password");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to change password");
    }
  };

  return (
    <>
      <ToastContainer />
      <div style={{overflow:"hidden"}}>
        <div style={{ position: 'relative', height: '50px' }}>
          <button className='btn-1' onClick={handleSkip} style={{ position: 'absolute', bottom: '0' }}>
            <FontAwesomeIcon style={{ fontSize: "150%" }} icon={faAngleLeft} />
          </button>
        </div>
        <div className='text-content'>
          <h1>Forgot password</h1>
          <div>
            <p>Enter your NewPassword and ConfrmPassword</p>
          </div>
        </div>
        <br></br>
        <div className='body'>
          <form onSubmit={handleSubmit}>
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
    </>
  )
}

export default Confrpwd;