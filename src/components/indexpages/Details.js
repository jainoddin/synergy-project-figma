import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faLessThan,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Details.css";
import img1 from "../../imgs/imgg1.jpeg";
import av from "../../imgs/av.jpg";
import star from "../../imgs/star.png";
import imgd1 from "../../imgs/1.jpeg";
import imgd2 from "../../imgs/2.jpeg";
import imgd3 from "../../imgs/3.jpeg";
import imgd4 from "../../imgs/4.jpeg";
import imgd5 from "../../imgs/5.jpeg";
import imgd6 from "../../imgs/6.jpeg";









const Details = () => {
  const [avatar, setavatar] = useState(av);

  return (
    <>
      <div className="ww" style={{overflow:"hidden"}}>
        
        <div> <img
              src={img1}
             className="details-img"
            ></img></div>
             <div>
          <button className="btn-details" style={{position:"absolute"}}>
            {" "}
            <FontAwesomeIcon icon={faLessThan} style={{ fontSize: "13px" }} />
          </button>
          <button className="btn-detail" style={{position:"absolute"}}>
            {" "}
            <FontAwesomeIcon icon={faLessThan} style={{ fontSize: "13px" }} />
          </button>
          
        </div>
        <div className="ccc" >
            <div className="log-dot">
            <span className="dot1 activee"></span>
            </div>
            <div>
              <h1 style={{fontSize:"20px",paddingLeft:"10px"}}>Niladri Reservoir</h1>
              <p style={{fontSize:"10px",paddingLeft:"10px",marginTop:"-10px"}}>Tekergat, Sunamgnj</p>
              <div style={{display:"flex"}}>
              <img
              className="logo-img"
              src={avatar}
              style={{ borderRadius: "50%",width:"13%",position:"fixed", top:"42%",left:"75%" }}
            />              </div>
            </div>
            <div>
               <div
            style={{
              display: "flex",
              fontSize: "11px",
              position: "relative",
              top: "-10px",
              left: "10px",
            }}
          >
            <p style={{ display: "flex" }}>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "10px" }}
              />
              <span>&nbsp;</span>tekergat
            </p>
            <div>
              <div
                class="avatar-group"
                style={{ paddingTop: "6px", marginLeft: "25px" }}
              >
                <div class="avatar">
                <p
              style={{
                justifyContent: "center",
                position:'fixed',
                marginLeft: "30px",
                top:"51%"
              }}
            >
              <img src={star} style={{ width: "15px" }}></img>
              <span style={{ position:"fixed", top: "53%" }}>4.7(2498)</span>
              <span style={{ position:"fixed", top: "53%",marginLeft: "110px",color:"BLUE" }}>$59</span>
              <span style={{ position:"fixed", top: "53%",marginLeft: "130px", }}>/Person</span>

            </p>
                  </div></div></div></div>


              
            </div>





          <div style={{marginTop:"-10px",marginLeft:"10px"}}>
          <img
              className=""
              src={imgd1}
              style={{width:"11%",margin:"9px",marginLeft:"15px",borderRadius:"8px" }}
            />   
            <img
              className=""
              src={imgd5}
              style={{width:"13%",margin:"9px",borderRadius:"8px"   }}
            /> 
            <img
              className=""
              src={imgd6}
              style={{width:"13%",margin:"9px" ,borderRadius:"8px"  }}
            /> 
            <img
              className=""
              src={imgd4}
              style={{width:"13%",margin:"9px",borderRadius:"8px"   }}
            /> 
            <img
              className=""
              src={imgd3}
              style={{width:"13%",margin:"10px",borderRadius:"8px"   }}
            /> 
          </div>


         <div style={{padding:"10px"}}><h1 style={{fontSize:"18px",marginTop:"-6px"}}>About Destination</h1><div style={{height:"80px",overflow:"hidden",marginTop:"-10px"}}><p style={{fontSize:"15px",overflow:'hidden',marginTop:"-5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><button style={{color:"orange",position:"fixed",top:"84%",backgroundColor:"whitesmoke",border:"none",left:"57%",marginLeft:"20px"}}>Read more</button></div></div>
         <div className="b" style={{  justifyContent: "center",padding:"5px",marginLeft:"25px",marginTop:"-10px"}}>
        <button className="btn2" style={{width:"90%" }}>
          Next
        </button>
        </div>
        </div>
      </div>
     
    </>
  );
};

export default Details;
