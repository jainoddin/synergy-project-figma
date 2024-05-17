import img1 from "../imgs/img-2.jpeg";
import { useNavigate } from "react-router-dom";
import React from "react";

function Page3() {
  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/home3");
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
          It's a big world out there go{" "}
          <span
            className="underlined underline-mask"
            style={{ color: "#f17e1f" }}
          >
            Explore
          </span>{" "}
        </h1>
        <h5 className="h5">
          To get best of your adventure you just need to leave and go where you
          like. we are <br></br> waitingfor you
        </h5>
      </div>
      <div style={{ textAlign: "center" }} className="a">
        <span className="dot"></span>
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
      <br></br>
      <div className="b" style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn2" onClick={handleSkip}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Page3;
