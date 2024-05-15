import "./Page_1.css"
import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom"



const Page_1 = () => {
  useEffect(() => {
    document.body.classList.add('home-bg');
    return () => {
      document.body.classList.remove('home-bg');
    };
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000); // 20 seconds
  }, []);
  return (
    <div className="page-1-container">
      <h1>Travenor</h1>
    </div>
  )
}

export default Page_1
