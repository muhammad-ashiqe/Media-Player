import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { fetchVideos, uploadVideo } from "../services/allApi";
import { toast } from "react-toastify";

const Add = ({setUploadVideoStatus}) => {
  const [show, setShow] = useState(false);
  const [formData, setFomData] = useState({
    caption: "",
    imageLink: "",
    videoLink: "",
  });

  // const inputHandler=(e)=>{
  //   const {name,value} = e.target;
  //   setFomData((prv)=>({...prv,[name]:value}))
  // }

  const handleEmbededCode = (data) => {
    //set emebed link
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
    setFomData({ ...formData, videoLink: `${link}` });
  };

  const sendData = async () => {
    console.log(formData);
    if (!formData.caption || !formData.imageLink || !formData.videoLink) {
      toast.warning("please fill all the fields");
    } else {
     const result =  await uploadVideo(formData)
     console.log(result);
      // .then(console.log("Upload success")).catch((err)=>console.log(err));

      if (result.status === 201) {
       toast.success("Upload Success");
       setUploadVideoStatus({result})
      }else{
        toast.error("something went wrong")
      }
      setFomData({
        caption: "",
        imageLink: "",
        videoLink: "",
      });
      handleClose()
      
    }
  };

  const handleClose = () => {
    setShow(false);
    setFomData({
      caption: "",
      imageLink: "",
      videoLink: "",
    });
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <p style={{cursor:"pointer"}} onClick={() => handleShow()} className=" bg-primary px-3  py-2 rounded-2"> <i class="fa-solid fa-plus"></i>  Upload New Video</p>
        {/* <button
          
          style={{ width: "50px" }}
          className="btn "
        >
          <i className="fa-solid fa-cloud-arrow-up text-white fs-5"></i>
        </button> */}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ background: "#000730" }} closeButton>
          <Modal.Title style={{ background: "#000730" }}>
            <i className="fa-solid fa-film text-primary"></i> Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000730", padding: "20px 50px" }}>
          <Form className="border border-secondary p-3 rounded">
            <p className="fs-5 text-center">Please fill the form</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Caption"
                value={formData.caption}
                name="caption"
                onChange={(e) =>
                  setFomData({ ...formData, caption: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Thumbnail Image address"
                name="imageLink"
                value={formData.imageLink}
                onChange={(e) =>
                  setFomData({ ...formData, imageLink: e.target.value })
                }
              />{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter youtube video link"
                value={formData.videoLink}
                name="videoLink"
                onChange={(e) => handleEmbededCode(e.target.value)}
              />{" "}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ background: "#000730" }}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => sendData()}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
