import axios from "axios";

export default class ApiClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  async get(path) {
    try {
      const res = await axios.get(`${this.baseUrl}${path}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDE3NDE4LCJpYXQiOjE2OTA5MzEwMTgsImp0aSI6ImI2ZTcxODBiNDQ4MzQ2MWNiNzZmYjMyOGRjMWFjMTVjIiwidXNlcl9pZCI6MX0.pKh0HJY7nGCGe4MvsE2WkJ00ZaedjUdJe1HyPWw-Kqc`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDE3NDE4LCJpYXQiOjE2OTA5MzEwMTgsImp0aSI6ImI2ZTcxODBiNDQ4MzQ2MWNiNzZmYjMyOGRjMWFjMTVjIiwidXNlcl9pZCI6MX0.pKh0HJY7nGCGe4MvsE2WkJ00ZaedjUdJe1HyPWw-Kqc`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
