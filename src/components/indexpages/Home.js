import React, { useState } from "react";
import "./Home.css";
import av from "../../imgs/av.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouseUser,
  faCalendar,
  faMagnifyingGlass,
  faUser,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imgs/imgg1.jpeg"

const Home = () => {
  const [avatar, setavatar] = useState(av);
  return (
    <div>
      <div>
        <div class="avatar">
          <div
            class="logo-content"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <img
              className="logo-img"
              src={avatar}
              style={{ borderRadius: "50%" }}
            />
            <p
              style={{ margin: 7, width: "auto", fontSize: "13px" }}
              className="h5-text"
            >
              jain
            </p>
          </div>
          <button className="btn-notic">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} className="bell" />
          </button>
        </div>
      </div>
      <div className="text-p">
        <p style={{ fontSize: "30px", marginTop: "-11%", marginBottom: "-6%" }}>
          Explore the
        </p>
        <h1>
          Beautiful{" "}
          <span
            className="underlined underline-mask"
            style={{ color: "#f17e1f" }}
          >
            World!
          </span>{" "}
        </h1>
        <h2 style={{fontSize:"15px"}}>Best Destination</h2>
      </div>


      <div className="mid-background">
        <div>
        <img src={img1} style={{fontSize:"10px",width:"170px",borderRadius:"10px", position:"relative", left:"10px"}}></img>
        </div>
        <div style={{display:"flex",fontSize:"12px"}}><h4>Niladri Reservoir</h4><p style={{position:"absolute",top:"10%"}}>4.7</p></div>
        <div style={{display:"flex",fontSize:"10px"}}><p>tekergat,Sunamgni</p><div><div class="avatar-group" >
  <div class="avatar">
    <div style={{width:"12px"}}>
      <img style={{borderRadius:"100%",width:"20px"}} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img style={{borderRadius:"100%",width:"20px"}} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img style={{borderRadius:"100%" ,width:"20px"}} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral text-neutral-content" className="bg-neutral">
      <span style={{fontSize:"14px"}}>+99</span>
    </div>
  </div>
</div></div></div>
      </div>










      <div className="footer-bar">
        <div>
          <div class="container">
            <ul>
              <li>
                <a class="list-items" href="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faHouseUser}
                    style={{ fontSize: "20px",color:"gray" }}
                  />
                  Home
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ fontSize: "20px",color:"gray", position:"relative",left:"35%" }}
                  />
                  Calendar
                </a>
              </li>
              <li>
                <a class="list-items" style={{paddingBottom:"20px", position:"relative",top:"-10%"}} href="">
                  <button style={{ borderRadius: "50%", height: "35px",backgroundColor:"blue",border:"none",width:"110%" }}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "20px",color:"white" }}
                    />
                  </button>
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon
                    icon={faMessage}
                    style={{ fontSize: "20px",color:"gray", position:"relative",left:"25%"  }}
                  />
                  Messages
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px",color:"gray", position:"relative",left:"25%" }} />
                  profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
