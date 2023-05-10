import axios from "axios";

const baseUrl = "http://localhost:3001/api/trips";

export const getAll = (page) => {
  const request = axios.get(`${baseUrl}?page=${page}`);
  return request.then(res => res.data);
};
