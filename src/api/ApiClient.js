import axios from "axios";

export default class ApiClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  async get(path) {
    try {
      const res = await axios.get(`${this.baseUrl}${path}`, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTI2Mjc1LCJpYXQiOjE2OTEwMzk4NzUsImp0aSI6IjhkODRlMjEzZWVmZDRjNGI5YmVlNzdmZjU5MjM1ZWUyIiwidXNlcl9pZCI6NH0.7AcV4A9XWSlawsycznU_a-0J_VUAVGZd5QuzAUneFSI`,
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
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTI2Mjc1LCJpYXQiOjE2OTEwMzk4NzUsImp0aSI6IjhkODRlMjEzZWVmZDRjNGI5YmVlNzdmZjU5MjM1ZWUyIiwidXNlcl9pZCI6NH0.7AcV4A9XWSlawsycznU_a-0J_VUAVGZd5QuzAUneFSI`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
