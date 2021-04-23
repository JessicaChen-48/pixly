import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Api {
 
  static async request(endpoint, data = {}, method = "get", headers = {}) {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers})).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getAllPics() {
    let res = await this.request("");
    return res;
  }

  static async postAPic(imgData) { 
    const formData = new FormData();
    formData.append('file',imgData);
    let res = await this.request("upload", formData, "post", {"Content-Type" : "multipart/form-data"})
    return res;
  }

}

export default Api;