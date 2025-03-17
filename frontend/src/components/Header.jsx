import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" >
          <Link style={{ textDecoration: "none" }} to={"/"} className="text-white d-flex pt-2">
            <img
              alt=""
              src="https://icon-library.com/images/media-play-icon/media-play-icon-0.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{" "}
            <p className="fw-bolder"> Media <span style={{color:"blue",fontWeight:"700"}}>Player</span></p>
          </Link>
        </Navbar.Brand>

       
      </Container>
    </Navbar>
  );
};

export default Header;
