import { serverUrl } from "./Serverurl";
import { commonApi } from "./commonApi";

//api call for upload video
const uploadVideo = async (reqBody) => {
  return await commonApi("post", `${serverUrl}/videos`, reqBody);
};

const fetchVideos = async () => {
  return await commonApi("get", `${serverUrl}/videos`, "");
};

const deleteVideo = async (id) => {
  return await commonApi("delete", `${serverUrl}/videos/${id}`, "");
};

const handleHistory = async (reqBody) => {
  return await commonApi("post", `${serverUrl}/history`, reqBody);
};

const fetchHistory = async () => {
  return await commonApi("get", `${serverUrl}/history`, "");
};

const deleteHistory = async (id) => {
  return await commonApi("delete", `${serverUrl}/history/${id}`);
};

const addCategory = async (reqBody) => {
  return await commonApi("post", `${serverUrl}/categories`, reqBody);
};

const getAllCategorys = async () => {
  return await commonApi("get", `${serverUrl}/categories`, "");
};

const deleteCategory = async (id)=>{
  return await commonApi("delete",`${serverUrl}/categories/${id}`)
}
export {
  uploadVideo,
  fetchVideos,
  handleHistory,
  deleteVideo,
  fetchHistory,
  deleteHistory,
  addCategory,
  getAllCategorys,
  deleteCategory
};
