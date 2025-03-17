import React from "react";
import "./LandingPage.css";
import Button from "react-bootstrap/Button";
import {Card,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container text-center">
      <div className="para">
        <h2>Introducing</h2>
        <h1>
          Media <span className="span">Player</span>{" "}
        </h1>
      </div>

      <div className="btn-container d-flex gap-3 mt-3 mb-5">
        <Link to={"/home"}>
          <button className="btn btn-primary">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>

        <Link to={"/home"}>
          <button className="btn btn-outline border-primary text-white">
            Readmore <i className="fa-solid fa-caret-down"></i>
          </button>
        </Link>
      </div>

      <div className="services ">
        <h5>Why do You Choose Us</h5>
        <hr />

        <div className="container cards-container d-flex justify-content-evenly gap-4 mt-5">
          <Card style={{ width: "18rem" }}>
            <div className="img-container">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/1186/1186139.png"
              />
            </div>

            <Card.Body>
              <Card.Title>Manage Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}> <Button variant="primary">Check out</Button></Link>
             
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <div className="img-container">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/738/738882.png"
              />
            </div>

            <Card.Body>
              <Card.Title>Add Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>  <Button variant="primary">Add</Button></Link>
            
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <div className="img-container">
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/2340/2340249.png"
              />
            </div>

            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={'/history'}>  <Button variant="primary">History</Button></Link>
           
            </Card.Body>
          </Card>
        </div>
      </div>


      <div className="third-container container mt-5 mb-5 border border-2 border-secondary rounded p-5">
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="d-flex flex-column text-start justify-content-center">
          <h3 className="mb-2 text-primary">New Era of Video Streaming</h3>
          <p>Play Everything : <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores!</span></p>
          <p>Play Everything : <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores!</span></p>
          <p>Play Everything : <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores!</span></p>
          </Col>
          
          <Col >
          <div >
          <iframe width="90%" height="400" src="https://www.youtube.com/embed/lM8h5Mm6ODo" title="JAILER - Kaavaalaa Video Song | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Tamannaah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default LandingPage;
