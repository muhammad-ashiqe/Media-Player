import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addCategory,
  deleteCategory,
  getAllCategorys,
  getVideoWithid,
  updateCategory,
} from "../services/allApi";
import { toast } from "react-toastify";

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategory("");
  };
  const handleShow = () => setShow(true);

  const [Category, setCategory] = useState("");
  const [CategoryItem, setCategoryitem] = useState([]);

  const sumbitCategory = async () => {
    if (!Category) {
      toast.warning("please fill the fom");
    } else {
      const reqBody = {
        categoryName: Category,
        allVideo: [],
      };
      const result = await addCategory(reqBody);
      if (result.status === 201) {
        toast.success("category Created ");
        getCategory();
      } else {
        toast.error("something went wrong");
      }
      setCategory("");
      handleClose();
    }
  };

  const getCategory = async () => {
    const response = await getAllCategorys();
    setCategoryitem(response.data);
  };

  const deleteCAtegoryItem = async (id) => {
    const response = await deleteCategory(id);
    if (response.status === 200) {
      toast.success("category deleted successfully");
      getCategory();
    } else {
      toast.error("error deleting category");
    }
  };

  const draggOver = (e) => {
    e.preventDefault();
    console.log("inside drag over");
  };

  const videoDrop = async (e, id) => {
    console.log(`dropped with category ${id}`);
    const vId = e.dataTransfer.getData("VideoId");
    console.log(`video with id:${vId} dropped inside category id:${id}`);

    //fetching the video with id from backend
    const response = await getVideoWithid(vId);
    const { data } = response;

    // finding category with id
    let selectedCtegory = CategoryItem.find((item) => item.id === id);
    selectedCtegory.allVideo.push(data);
    console.log("final category", selectedCtegory);
    const updated = await updateCategory(id, selectedCtegory);
    console.log(updated);
    getCategory();
  };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log(CategoryItem);
  return (
    <div className="p-4">
      <h5>Category</h5>
      <hr />
      <button className="btn btn-success" onClick={handleShow}>
        <i className="fa-solid fa-plus"></i> Add New catrogory
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ background: "#000730" }}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000730" }}>
          <Form className="border border-secondary p-3 rounded">
            <p className="fs-5 text-center">Please fill the form</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="caption"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ background: "#000730" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => sumbitCategory()} variant="primary">
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>

      {CategoryItem?.map((item, index) => (
        <div
          key={index}
          className=" p-1 mt-1 w-100"
          droppable
          onDragOver={(e) => draggOver(e)}
          onDrop={(e) => videoDrop(e, item.id)}
        >
          <div
            style={{ background: "#220299" }}
            className="d-flex justify-content-between align-items-center mt-2   p-3 rounded-3"
          >
            <h6>{item.categoryName}</h6>
            <button
              onClick={() => deleteCAtegoryItem(item.id)}
              className="btn btn-danger w-25"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <hr />
          <div
            className="d-flex flex-column gap-3 align-items-center justify-content-center"
            style={{ background: "#000730" }}
          >
            <div className="d-flex flex-wrap align-items-center justify-content-center p-3 gap-3">
              {item.allVideo?.map((item, index) => (
                <div style={{background:"#11004f",width:"30%"}} className=" d-flex  justify-content-center align-items-center  rounded-3 text-center">
                  <img style={{width:"100%"}}
                    className="rounded-3"
                    src={item.imageLink}
                    alt=""
                  />
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
