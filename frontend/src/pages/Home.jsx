import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Category from "../components/Category";

const Home = () => {
  const [uploadVideoStatus, setUploadVideoStatus] = useState({});
 
  return (
    <>
      <div className="container d-flex align-items-center mt-5 justify-content-between">
        <Add setUploadVideoStatus={setUploadVideoStatus}/>

        <Link to={"/history"} style={{ textDecoration: "none" }}>
          <span className="fs-5 fw-bolder">
            History <i className="fa-solid fa-clock"></i>
          </span>
        </Link>
      </div>

      {/* secondary section */}
      <div className="container-fluid mt-5 d-flex align-items-center w-100">
        <div className="row d-flex w-100 ">
          <div className="col-md-9">
            <View setUploadVideoStatus={setUploadVideoStatus} uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className="col-md-3">
            <Category />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
