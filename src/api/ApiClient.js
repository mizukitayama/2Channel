import axios from "axios";

export default class ApiClient {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  async get(path) {
    try {
      const res = await axios.get(`${this.baseUrl}${path}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDQxNTA4LCJpYXQiOjE2OTA5NTUxMDgsImp0aSI6IjRjNDBhNjE4ZTk0ZjQyY2ZiNjkxMTk5MzgxMTViYThkIiwidXNlcl9pZCI6MX0.SWBwSaj8_nkgpZcJ1dek_S77w4GCtCcs1iWMJE6QEeA`,
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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMDQxNTA4LCJpYXQiOjE2OTA5NTUxMDgsImp0aSI6IjRjNDBhNjE4ZTk0ZjQyY2ZiNjkxMTk5MzgxMTViYThkIiwidXNlcl9pZCI6MX0.SWBwSaj8_nkgpZcJ1dek_S77w4GCtCcs1iWMJE6QEeA`,
        },
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }
}
