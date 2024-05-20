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
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imgs/imgg1.jpeg";
import { useNavigate } from "react-router-dom";
import star from "../../imgs/star.png";

const Home = () => {
  const [avatar, setavatar] = useState(av);
  const navigateFunc = useNavigate();

  const showview = () => {
    navigateFunc("/Login");
  };
  return (
    <div className="top-contant">
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
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "20px" }}
              className="bell"
            />
          </button>
        </div>
      </div>
      <div className="text-p">
        <p style={{ fontSize: "30px", marginTop: "-13%", marginBottom: "-8%" }}>
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
        <h2 style={{ fontSize: "15px", marginTop: "-0%" }}>Best Destination</h2>
        <span
          style={{
            fontSize: "12px",
            color: "blue",
            position: "absolute",
            left: "81%",
            top: "29%",
          }}
        >
          <button
            style={{ border: "none", backgroundColor: "white", color: "blue" }}
            onClick={showview}
          >
            View all
          </button>
        </span>
      </div>

      <div
        className="mid-background"
        style={{ display: "flex", height: "400px" }}
      >
        <button
          style={{
            marginBottom: "-10px",
            height: "268px",
            borderRadius: "10px",
          }}
          className="bbb"
        >
          <div>
            <img
              src={img1}
              style={{
                fontSize: "20px",
                width: "170px",
                borderRadius: "15px",
                padding: "5px",
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              position: "relative",
              top: "-15px",
              left: "10px",
            }}
          >
            <h4>Niladri Reservoir</h4>
            <p
              style={{
                justifyContent: "center",
                paddingTop: "3px",
                marginLeft: "10px",
              }}
            >
              <img src={star} style={{ width: "15px" }}></img>
              <span style={{ position: "relative", top: "-10%" }}>4.7</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "11px",
              position: "relative",
              top: "-35px",
              left: "10px",
            }}
          >
            <p style={{ display: "flex" }}>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "10px" }}
              />
              <span>&nbsp;</span>tekergat,Sunamgni
            </p>
            <div>
              <div
                class="avatar-group"
                style={{ paddingTop: "6px", marginLeft: "25px" }}
              >
                <div class="avatar">
                  <div style={{ width: "12px" }}>
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar placeholder">
                  <div
                    class="w-12 bg-neutral text-neutral-content"
                    className="bg-neutral"
                    style={{ margin: "2px" }}
                  >
                    <span style={{ fontSize: "10px", marginTop: "100%" }}>
                      +99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
        <button
          style={{
            marginBottom: "-10px",
            height: "268px",
            borderRadius: "10px",
          }}
          className="bbb"
        >
          <div>
            <img
              src={img1}
              style={{
                fontSize: "20px",
                width: "170px",
                borderRadius: "15px",
                padding: "5px",
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              position: "relative",
              top: "-15px",
              left: "10px",
            }}
          >
            <h4>Niladri Reservoir</h4>
            <p
              style={{
                justifyContent: "center",
                paddingTop: "3px",
                marginLeft: "10px",
              }}
            >
              <img src={star} style={{ width: "15px" }}></img>
              <span style={{ position: "relative", top: "-10%" }}>4.7</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "11px",
              position: "relative",
              top: "-35px",
              left: "10px",
            }}
          >
            <p style={{ display: "flex" }}>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "10px" }}
              />
              <span>&nbsp;</span>tekergat,Sunamgni
            </p>
            <div>
              <div
                class="avatar-group"
                style={{ paddingTop: "6px", marginLeft: "25px" }}
              >
                <div class="avatar">
                  <div style={{ width: "12px" }}>
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar placeholder">
                  <div
                    class="w-12 bg-neutral text-neutral-content"
                    className="bg-neutral"
                    style={{ margin: "2px" }}
                  >
                    <span style={{ fontSize: "10px", marginTop: "100%" }}>
                      +99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        <button
          style={{
            marginBottom: "-10px",
            height: "268px",
            borderRadius: "10px",
          }}
          className="bbb"
        >
          <div>
            <img
              src={img1}
              style={{
                fontSize: "20px",
                width: "170px",
                borderRadius: "15px",
                padding: "5px",
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              position: "relative",
              top: "-15px",
              left: "10px",
            }}
          >
            <h4>Niladri Reservoir</h4>
            <p
              style={{
                justifyContent: "center",
                paddingTop: "3px",
                marginLeft: "10px",
              }}
            >
              <img src={star} style={{ width: "15px" }}></img>
              <span style={{ position: "relative", top: "-10%" }}>4.7</span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "11px",
              position: "relative",
              top: "-35px",
              left: "10px",
            }}
          >
            <p style={{ display: "flex" }}>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "10px" }}
              />
              <span>&nbsp;</span>tekergat,Sunamgni
            </p>
            <div>
              <div
                class="avatar-group"
                style={{ paddingTop: "6px", marginLeft: "25px" }}
              >
                <div class="avatar">
                  <div style={{ width: "12px" }}>
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-12">
                    <img
                      style={{ borderRadius: "100%", width: "20px" }}
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div class="avatar placeholder">
                  <div
                    class="w-12 bg-neutral text-neutral-content"
                    className="bg-neutral"
                    style={{ margin: "2px" }}
                  >
                    <span style={{ fontSize: "10px", marginTop: "100%" }}>
                      +99
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
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
                    style={{ fontSize: "20px", color: "gray" }}
                  />
                  Home
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      position: "relative",
                      left: "35%",
                    }}
                  />
                  Calendar
                </a>
              </li>
              <li>
                <a
                  class="list-items"
                  style={{
                    paddingBottom: "20px",
                    position: "relative",
                    top: "-10%",
                  }}
                  href=""
                >
                  <button
                    style={{
                      borderRadius: "50%",
                      height: "35px",
                      backgroundColor: "blue",
                      border: "none",
                      width: "110%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  </button>
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon
                    icon={faMessage}
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      position: "relative",
                      left: "25%",
                    }}
                  />
                  Messages
                </a>
              </li>
              <li>
                <a class="list-items" href="">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      fontSize: "20px",
                      color: "gray",
                      position: "relative",
                      left: "25%",
                    }}
                  />
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
