import img1 from "../imgs/img-1.jpeg";
import { useNavigate } from "react-router-dom";
import React from "react";

function Page2() {
  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/home2");
  };

  return (
    <div className="page2-home">
      <button onClick={handleSkip} className="btn1">
        Skip
      </button>
      <div>
        <img className="img1" src={img1} alt="Image 1" />
      </div>
      <div className="txt">
        <h1>
          Life is short and the world is{" "}
          <span
            className="underlined underline-mask"
            style={{ color: "#f17e1f" }}
          >
            wide
          </span>{" "}
        </h1>
        <h5 className="h5">
          At Frieds and travel, we customize reliable and trutworthy education
          tours to destinations all over the world
        </h5>
      </div>
      <div style={{ textAlign: "center" }} className="a">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <br></br>
      <div className="b" style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn2" onClick={handleSkip}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Page2;
