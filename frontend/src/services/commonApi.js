import axios from "axios"

export const commonApi = async (httpMethod, url, requestBody) => {
  let reqConfig = {
    method:httpMethod,
    url:url,
    data:requestBody,
    Headers:{
      "Content-type":"application/json"
    }
  };

  return await axios(reqConfig).then((result) => {
    return result;
  }).catch((err)=>{
    return err;
  })
};
