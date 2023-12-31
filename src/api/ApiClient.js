import axios from "axios";

export default class ApiClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
    this.token = localStorage.getItem("GMO2ch.access");
  }

  async get(path) {
    try {
      const res = await axios.get(`${this.baseUrl}${path}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async post(path, params) {
    try {
      const res = await axios.post(`${this.baseUrl}${path}`, params, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async put(path, params) {
    try {
      const res = await axios.put(`${this.baseUrl}${path}`, params, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async delete(path) {
    try {
      const res = await axios.delete(`${this.baseUrl}${path}`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  async postWithoutToken(path, params) {
    try {
      const res = await axios.post(`${this.baseUrl}${path}`, params);
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
