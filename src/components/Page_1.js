import "./Page_1.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page_1 = () => {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000); // 20 seconds
  }, []);

  return (
    <div className="page-1-container">
      <h1>Travenor</h1>
    </div>
  );
};

export default Page_1;
