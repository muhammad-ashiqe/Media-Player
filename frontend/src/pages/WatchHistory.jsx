import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { deleteHistory, fetchHistory } from "../services/allApi";
import { toast } from "react-toastify";

const WatchHistory = () => {
  const [historyData, setHistoryData] = useState([]);

  const getHistory = async () => {
    const result = await fetchHistory();
    // console.log(result.data)
    setHistoryData(result.data);
  };

  const handleDelete = async (id) => {
    const result = await deleteHistory(id);
    if (result.status === 200) {
      toast.success("History deleted successfully");
      getHistory();
    } else {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch Histoy</h3>
        <Link to={"/home"}>
          {" "}
          <button className="btn btn-primary">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </button>{" "}
        </Link>
      </div>

      <div style={{ overflowX: "scroll" }}>
        <table className="table mt-5 container table-dark table-bordered text-center">
          <thead>
            <tr>
              <th>No.</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {historyData.length > 0 ? (
              historyData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>{item.videoLink}</td>
                  <td>{item.time}</td>
                  <td>
                    <button
                      className="btn btn-danger w-50"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa-solid fa-trash  "> </i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p style={{textAlign:"center"}}>No History Found</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchHistory;
