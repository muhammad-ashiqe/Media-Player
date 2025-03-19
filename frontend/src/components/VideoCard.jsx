import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteVideo, fetchVideos, handleHistory } from "../services/allApi";
import { toast } from "react-toastify";

const VideoCard = ({ image, title, video, id, setDeleteVideoStatus }) => {
  const [show, setShow] = useState(false);
  // const [history, setHistory] = useState({ caption: "", url: "", time: "" });

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    console.log(year, month, day);
    const hour = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    const timeValue =
      day +
      "-" +
      month +
      "-" +
      year +
      "   " +
      hour +
      ":" +
      minutes +
      ":" +
      seconds;
    console.log(timeValue);

    const history = {
      caption: title,
      videoLink: video,
      time: timeValue,
    };

    const result = await handleHistory(history);
    console.log(result);
  };

  const handleDelete = async (idToBeDeleted) => {
    const result = await deleteVideo(idToBeDeleted);
    if (result.status === 200) {
      toast.success(`${title} - video deleted success`);
      setDeleteVideoStatus(result);
    } else {
      toast.error("something went wrong");
    }
  };

  const dragStarted=(e,id)=>{
    console.log(`video with id : ${id} started dragging`)
    e.dataTransfer.setData("VideoId",id)
  }


  return (
    <>
      <Card style={{ width: "18rem", marginTop: "20px" }} draggable onDragStart={(e)=>dragStarted(e,id)}>
        <div
          className="img-container "
          style={{ width: "300px", height: "350px" }}
        >
          <Card.Img
            className="rounded"
            style={{ width: "100%", height: "100%" }}
            variant="top"
            src={image}
            onClick={() => handleShow()}
          />
        </div>

        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            <i className="fa-solid fa-trash"></i> Remove
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ background: "#000730" }} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000730", height: "300px" }}>
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="Nenjakame Lyrical Video | Ambili | Soubin Shahir | E4 Entertainment | Johnpaul George"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Modal.Body>
        <Modal.Footer
          style={{
            background: "#000730",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VideoCard;
