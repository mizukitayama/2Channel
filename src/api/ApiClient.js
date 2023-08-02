import axios from "axios";

export default class ApiClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  async get(path) {
    try {
      const res = await axios.get(`${this.baseUrl}${path}`);
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async post(path, params) {
    try {
      const res = await axios.post(`${this.baseUrl}${path}`, params);
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
