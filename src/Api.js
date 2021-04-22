import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Api {
 
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};
    const headers = {
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
    "type": "formData"}

    try {
      return (await axios({ url, method, data, params, headers})).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllPics() {

  }

  static async postAPic(filePath) { 
    let res = await this.request("upload/", filePath, "post")
    return res;
  }

}

export default Api;