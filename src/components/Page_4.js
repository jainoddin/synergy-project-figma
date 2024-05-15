import img1 from "../imgs/img-3.jpeg";
import { useNavigate } from "react-router-dom";
import React from 'react';

function Page4() {
  const navigateFunc = useNavigate();
  const handleSkip = () => {
    navigateFunc("/Login");
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
        <h2>
        People dony't take trips, trips take{" "}
          <span
            className="underlined underline-mask"
            style={{ color: "#f17e1f" }}
          >
            People
          </span>{" "}
        </h2>
        <h5 className="h5">
          To get best of your adventure you just need to leave and go where you like. we are <br></br> waitingfor you
        </h5>
      </div>
      <div style={{ textAlign: "center" }} className="a">
        <span className="dot" ></span>
        <span className="dot" ></span>
        <span className="dot active" ></span>
      </div>
      <br></br>
      <div className="b" style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn2" onClick={handleSkip}>Next</button>
      </div>
    </div>
  );
}

export default Page4;