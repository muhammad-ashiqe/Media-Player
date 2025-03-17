import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center  mt-5 bg-dark p-5">
      <div className="d-md-flex text-white justify-content-justify-content-evenly  gap-5">
        <div className="overview text-white" style={{ maxWidth: "400px" }}>
          <h4>
            <img
              src="https://icon-library.com/images/media-play-icon/media-play-icon-0.jpg"
              alt=""
              style={{ width: "50px" }}
            />
            <span>Media Player</span>
          </h4>
          <p className="" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ab
            ducimus praesentium assumenda sed porro quis quas inventore, in
            quisquam, odio rerum veniam. Doloremque quibusdam velit provident
            amet sunt repudiandae.
          </p>
        </div>

        <div className="d-flex flex-column ">
          <h4>Links</h4>
          <Link style={{textDecoration:"none"}}  to={'/'} >LANDING PAGE</Link>
          <Link style={{textDecoration:"none"}}  to={'/home'}>HOME</Link>
          <Link style={{textDecoration:"none"}}  to={'/history'}>WATCH HISTORY</Link>
        </div>

        <div className="">
          <h4>Guids</h4>
          REACT <br />
          REACT BOOTSTRAP <br />
          FONT AWESOME <br />
        </div>

        <div className="">
          <h4>Contact Us</h4>
          <div className="d-flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Enter your Email"
              className="form-control"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <h5>Social Links</h5>
          <div className="text-primary  d-flex gap-3 " style={{fontSize:"30px"}}>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-youtube"></i>
          </div>
          
        </div>
      </div>
      <hr style={{width:"100%",height:"1px",color:"white"}}/>
      <p style={{color:"white",textAlign:"center"}}>Copyright © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
