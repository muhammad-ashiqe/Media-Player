import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { fetchVideos } from "../services/allApi";

const View = ({uploadVideoStatus,setUploadVideoStatus}) => {
  const [cardData, setCardData] = useState([]);

  const [deleteVideoStatus, setDeleteVideoStatus] = useState({});

  const fetch = async () => {
    const result = await fetchVideos();
    const { data } = result;
    setCardData(data);
  };

  useEffect(() => {
    fetch();
  }, [uploadVideoStatus,deleteVideoStatus]);

  return (
    <div className="p-4">
      <h5>All Videos</h5>
      <hr />
      <Row>
        {cardData?.map((item, index) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={index} className="d-flex flex-wrap justify-content-center">
              <VideoCard key={item.id} id={item.id} image={item.imageLink} title={item.caption} video={item.videoLink} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default View;


// sm={12} md={6} lg={4} xl={3}
